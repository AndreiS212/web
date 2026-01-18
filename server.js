const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const session = require("express-session");
const passport = require("passport");
const nodemailer = require("nodemailer");
const path = require("path");

const videoRoutes = require("./routes/videoRoutes");
const authRoutes = require("./routes/authRoutes");
const reviewRoutes = require("./routes/reviewRoutes");
const connectDB = require("./config/db");

dotenv.config();
connectDB();

const app = express();

// -------------------- MIDDLEWARE --------------------
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

// -------------------- CONTACT API --------------------
app.post("/api/contact", async (req, res) => {
  const { name, email, phone, location, referral, socialMedia, message } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: 465,
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: process.env.RECIPIENT_EMAIL,
      subject: `Mesaj de la ${name}`,
      text: `
Nume: ${name}
Email: ${email}
Telefon: ${phone}
Locatie: ${location}
Referral: ${referral}
Social Media: ${socialMedia}
Mesaj:
${message}
      `,
    });

    res.status(200).json({ success: true });
  } catch (err) {
    console.error("Email error:", err);
    res.status(500).json({ success: false });
  }
});

// -------------------- OTHER API ROUTES --------------------
app.use("/api/reviews", reviewRoutes);
app.use("/api/videos", videoRoutes);
app.use("/api/auth", authRoutes);

// -------------------- REACT BUILD --------------------
app.use(express.static(path.join(__dirname, "client/build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client/build", "index.html"));
});

// -------------------- SERVER START --------------------
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
