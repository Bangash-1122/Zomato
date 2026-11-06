const userModel = require('../models/userModel');
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




module.exports = {
    registerUser,
    loginUser
};