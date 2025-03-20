const express = require("express");
const router = express.Router();
const passport = require("passport");

// Login page
router.get("/login", (req, res) => {
    res.render("login");
});

// Logout
router.get("/logout", (req, res) => {
    req.logout();
    res.redirect("/");
});

module.exports = router;
