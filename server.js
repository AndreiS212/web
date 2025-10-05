const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const session = require("express-session");
const passport = require("passport");
const nodemailer = require("nodemailer");
const videoRoutes = require("./routes/videoRoutes");
const authRoutes = require("./routes/authRoutes");
const reviewRoutes = require("./routes/reviewRoutes");
const connectDB = require("./config/db");
const Video = require("./models/Video");
const Review = require("./models/Review");
const path = require("path");

dotenv.config();
connectDB();

const app = express();
app.set("view engine", "ejs");

// ✅ Parse form + JSON requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static build
app.use(express.static(path.join(__dirname, "client/build")));

// Sessions & Passport
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

// ✅ Nodemailer config
const transport = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// ✅ Contact route (React form target)
app.post('/contact', async (req, res) => {
  const { name, email, phone, referral, message } = req.body;

  const html = `
    <h2>Mesaj nou de pe site</h2>
    <p><b>Nume:</b> ${name}</p>
    <p><b>Email:</b> ${email}</p>
    <p><b>Telefon:</b> ${phone}</p>
    <p><b>Cum a aflat:</b> ${referral || "Nespecificat"}</p>
    <p><b>Mesaj:</b></p>
    <p>${message}</p>
  `;

  try {
    await transport.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_RECEIVER || process.env.EMAIL_USER,
      subject: `Mesaj nou de la ${name}`,
      html
    });

    res.status(200).json({ success: true, message: "Mesaj trimis cu succes!" });
  } catch (err) {
    console.error("Eroare trimitere email:", err);
    res.status(500).json({ success: false, message: "Eroare la trimiterea mesajului." });
  }
});

// Other routes
app.use("/", reviewRoutes);
app.use("/", videoRoutes);
app.use("/", authRoutes);

// React app fallback
app.get("*", async (req, res) => {
  res.sendFile(path.join(__dirname, "client/build", "index.html"));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
