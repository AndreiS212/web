const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const session = require("express-session");
const passport = require("passport");
const videoRoutes = require("./routes/videoRoutes");
const authRoutes = require("./routes/authRoutes");
const reviewRoutes = require("./routes/reviewRoutes");
const connectDB = require("./config/db");
const Video = require("./models/Video");
const Review = require("./models/Review");
const nodemailer = require("nodemailer");

dotenv.config();
connectDB();

const app = express();
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

// Set up nodemailer transport
const transport = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false, // or 'STARTTLS'
  auth: {
    user: 'your-email@gmail.com',
    pass: 'your-password'
  }
});

// Set up email template
const emailTemplate = (data) => {
  return `
    <h2>Contact Form Submission</h2>
    <p>Name: ${data.name}</p>
    <p>Email: ${data.email}</p>
    <p>Phone: ${data.phone}</p>
    <p>Booking Date: ${data.bookingDate}</p>
    <p>Notes: ${data.notes}</p>
  `;
};

// Handle form submission
app.post('/contact', (req, res) => {
  const data = req.body;
  const email = emailTemplate(data);

  // Send email using nodemailer
  transport.sendMail({
    from: 'your-email@gmail.com',
    to: 'owner-email@example.com',
    subject: 'Contact Form Submission',
    html: email
  }, (err, info) => {
    if (err) {
      console.log(err);
      res.status(500).send('Error sending email');
    } else {
      console.log('Email sent successfully');
      res.send('Thank you for contacting us!');
    }
  });
});

// Home route - Fetch both videos and reviews from the database
app.get("/", async (req, res) => {
  console.log(" Home route hit");
  try {
    const videos = await Video.find() || [];
    const reviews = await Review.find() || [];

    console.log("Reviews: ", reviews);

    res.render('index', { videos, reviews });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
});

app.use("/", reviewRoutes);
app.use("/", videoRoutes);
app.use("/", authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(` Server running on port ${PORT}`));