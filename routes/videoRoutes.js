const express = require("express");
const router = express.Router();
const Video = require("../models/Video");

// Get all videos
router.get("/", async (req, res) => {
    const videos = await Video.find();
    res.render("index", { videos });
});

// Add a new video (Admin)
router.post("/add", async (req, res) => {
    const { title, url } = req.body;
    const videoId = new URL(url).searchParams.get("v");
    const thumbnail = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

    await Video.create({ title, url, thumbnail });
    res.redirect("/admin");
});

module.exports = router;
