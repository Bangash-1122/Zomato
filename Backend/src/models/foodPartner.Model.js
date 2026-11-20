const mongoose = require("mongoose");

const foodPartnerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    restaurantName: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
}, {})

const foodPartnerModel = mongoose.model("FoodPartner", foodPartnerSchema);

module.exports = foodPartnerModel;