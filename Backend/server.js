// start server
const app = require('./src/app');
const connectDB = require('./src/db/db');

// Connect to MongoDB
connectDB();

const PORT = process.env.PORT || 3001 ;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});