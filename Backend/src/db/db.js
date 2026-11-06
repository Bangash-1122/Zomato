const mongoose = require('mongoose');


function connectDB() {
    mongoose.connect("mongodb://localhost:27017/food-view")
    .then(() => {
        console.log("MongoDB connected successfully");
    })
    .catch((err) => {
        console.log("MongoDB connection failed", err);
    });
};

module.exports = connectDB;