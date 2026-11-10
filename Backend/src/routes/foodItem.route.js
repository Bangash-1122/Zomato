const express = require("express");
const foodItemController = require("../controllers/foodItem.controller");
const authMiddleware = require("../middlewares/auth.middleware");


const router = express.Router();

/* Post/api/foodItems/ [protected] */
router.post('/', authMiddleware.authFoodPartner, foodItemController.createFood);


module.exports = router;