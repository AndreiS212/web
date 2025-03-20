const express = require("express");
const router = express.Router();
const Review = require("../models/Review");

// Get all reviews
router.get("/", async (req, res) => {
    const reviews = await Review.find();
    res.render("index", { reviews });
});

module.exports = router;
