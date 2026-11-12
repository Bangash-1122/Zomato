const express = require("express");
const foodItemController = require("../controllers/foodItem.controller");
const authMiddleware = require("../middlewares/auth.middleware");
const multer = require("multer");
const router = express.Router();

const upload = multer({
    storage: multer.memoryStorage(),
})
/* Post/api/foodItems/ [protected] */
router.post('/', authMiddleware.authFoodPartner, upload.single('video'), foodItemController.createFood);


module.exports = router;