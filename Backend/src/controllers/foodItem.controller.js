const foodItem = require("../models/foodItem.model");
const storageService = require("../services/storge.service");

async function createFood(req, res) {
    try {
        const { name, description, video } = req.body;
        const videoUrl = await storageService.uploadFile(req.file, `food_videos/${Date.now()}_${req.file.originalname}`);
        const newFoodItem = new foodItem({
            name,
            description,
            video: videoUrl
        });
        await newFoodItem.save();
        res.status(201).json(newFoodItem);
    }
    catch (error) {
        console.error("Error creating food item:", error);
        res.status(500).json({ message: "Internal server error" });
    };
}



module.exports = {
    createFood
};