const userModel = require('../models/user.Model');
const foodPartnerModel = require('../models/foodPartner.Model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


async function registerUser(req, res) {
    try {
        const {
            fullName,
            email,
            password
        } = req.body;

        // Check if user already exists
        const existingUser = await userModel.findOne({
            email
        });
        if (existingUser) {
            return res.status(400).json({
                message: 'User already exists'
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        // Create new user
        const newUser = new userModel({
            fullName,
            email,
            password: hashedPassword
        });

        const token = jwt.sign({
                userId: newUser._id
            }, process.env.JWT_SECRET);

        res.cookie('token', token);

        await newUser.save();
        res.status(201).json({
            message: 'User registered successfully',
            user: {
                id: newUser._id,
                fullName: newUser.fullName,
                email: newUser.email
            },
            token
        });
    } catch (error) {
        console.error('Error registering user:', error);
        res.status(500).json({
            message: 'Internal server error'
        });
    }
}

async function loginUser(req, res) {
    try {
        const { email, password } = req.body;

        // Find user by email
        const user = await userModel.findOne({
            email
        });

        if (!user) {
            return res.status(400).json({
                message: 'Invalid credentials'
            });
        }

        // Check password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({
                message: 'Invalid credentials'
            });
        }

        // Generate token
        const token = jwt.sign({
                userId: user._id
            }, process.env.JWT_SECRET, );

        res.cookie('token', token);

        res.status(200).json({
            message: 'Login successful',
            user: {
                id: user._id,
                email: user.email,
                password: user.password
            },
            token
        });
    } catch (error) {
        console.error('Error logging in user:', error);
        res.status(500).json({
            message: 'Internal server error'
        });
    }
}

async function logoutUser(req, res) {
    try {
        res.clearCookie('token');
        res.status(200).json({
            message: 'User Logout successful'
        });
    } catch (error) {
        console.error('Error logging out user:', error);
        res.status(500).json({
            message: 'Internal server error'
        });
    }
}

// Now food partners can also register and login logout

async function registerFoodPartner(req, res) {
    try {
        const { name, email, password } = req.body;

        // Check if food partner already exists
        const existingFoodPartner = await foodPartnerModel.findOne({
            email
        });

        if (existingFoodPartner) {
            return res.status(400).json({
                message: 'Food partner already exists'
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        // Create new food partner
        const newFoodPartner = new foodPartnerModel({
            name,
            email,
            password: hashedPassword
        });

        const token = jwt.sign({
                foodPartnerId: newFoodPartner._id
            }, process.env.JWT_SECRET);

        res.cookie('token', token);

        await newFoodPartner.save();
        res.status(201).json({
            message: 'Food partner registered successfully',
            foodPartner: {
                id: newFoodPartner._id,
                name: newFoodPartner.name,
                email: newFoodPartner.email
            },
            token
        });
    } catch (error) {
        console.error('Error registering food partner:', error);
        res.status(500).json({
            message: 'Internal server error'
        });
    }
}

async function loginFoodPartner(req, res) {
    try {
        const { email, password } = req.body;

        // Find food partner by email
        const foodPartner = await foodPartnerModel.findOne({
            email
        });

        if (!foodPartner) {
            return res.status(400).json({
                message: 'Invalid credentials'
            });
        }

        // Check password
        const isMatch = await bcrypt.compare(password, foodPartner.password);
        if (!isMatch) {
            return res.status(400).json({
                message: 'Invalid credentials'
            });
        }

        // Generate token
        const token = jwt.sign({
                foodPartnerId: foodPartner._id
            }, process.env.JWT_SECRET);

        res.cookie('token', token);

        res.status(200).json({
            message: 'Food Partner Login successfully',
            foodPartner: {
                id: foodPartner._id,
                name: foodPartner.name,
                email: foodPartner.email
            },
            token
        });
    } catch (error) {
        console.error('Error logging in food partner:', error);
        res.status(500).json({
            message: 'Internal server error'
        });
    }
}

async function logoutFoodPartner(req, res) {
    try {
        res.clearCookie('token');
        res.status(200).json({
            message: 'Food Partner logged out successfully'
        });
    } catch (error) {
        console.error('Error logging out food partner:', error);
        res.status(500).json({
            message: 'Internal server error'
        });
    }
}

module.exports = {
    registerUser,
    loginUser,
    logoutUser,
    logoutFoodPartner,
    registerFoodPartner,
    loginFoodPartner
};
