// Create server
const express = require('express');
const cookieParser = require('cookie-parser');
const authRoutes = require('./routes/auth.Routes');
const foodItemRoutes = require('./routes/foodItem.route');

const app = express();
app.use(express.json());
app.use(cookieParser());

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use('/api/auth', authRoutes);
app.use('/api/foodItems', foodItemRoutes);

module.exports = app;