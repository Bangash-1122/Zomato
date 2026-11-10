const foodItem = require("../models/foodItem.model");


async function createFood(req, res) {
    try {
        const { name, description, price } = req.body;
}



module.exports = {
    createFood
};