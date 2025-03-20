const mongoose = require('mongoose');

const ReviewSchema = new mongoose.Schema({
    title: String,
    text: String
});

const Review = mongoose.model("Review", ReviewSchema);
module.exports = Review;