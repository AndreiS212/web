const mongoose = require("mongoose");

const VideoSchema = new mongoose.Schema({
    title: String,
    url: String,  // YouTube video link
    thumbnail: String
});

// module.exports = mongoose.model("Video", VideoSchema);
const Video = mongoose.model("Video", VideoSchema);
module.exports = Video;
