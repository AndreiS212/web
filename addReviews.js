const mongoose = require('mongoose');
const Review = require('./models/Review');  // Make sure this points to the correct path for the Review model
require('dotenv').config();

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        const reviews = [
            { title: "Amazing Service!", text: "This was the best videography service I’ve ever used!" },
            { title: "Professional and Quality", text: "The team was highly professional and delivered exceptional quality." }
        ];

        return Review.insertMany(reviews);
    })
    .then(() => console.log('Sample reviews added successfully'))
    .catch(err => console.error('Error adding reviews:', err))
    .finally(() => mongoose.disconnect());
