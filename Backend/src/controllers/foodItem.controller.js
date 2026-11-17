const foodItem = require("../models/foodItem.model");
const storageService = require("../services/storge.service");
const { v4: uuid } = require("uuid");

async function createFood(req, res) {
    try {
        const { name, description, video } = req.body;
        const videoUrl = await storageService.uploadFile(req.file.buffer, `food_videos/${uuid()}_${req.file.originalname}`);
        const newFoodItem = new foodItem({
            name: req.body.name,
            description: req.body.description,
            video: videoUrl,
            foodPartner: req.foodPartner._id
        });
        await newFoodItem.save();
        res.status(201).json({ message: "Food item created successfully", foodItem: newFoodItem });
    }
    catch (error) {
        console.error("Error creating food item:", error);
        res.status(500).json({ message: "Internal server error" });
    };
}


module.exports = {
    createFood
};