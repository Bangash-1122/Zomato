const express = require("express");
const authController = require("../controllers/auth.Controller");

const router = express.Router();

// user authentication routes APIs
router.post("/user/register", authController.registerUser);
router.post("/user/login", authController.loginUser);
router.get("/user/logout", authController.logoutUser);

// food partner authentication routes APIs
router.post("/foodPartner/register", authController.registerFoodPartner);
router.post("/foodPartner/login", authController.loginFoodPartner);
router.get("/foodPartner/logout", authController.logoutFoodPartner);

module.exports = router;  // define your authentication routes here