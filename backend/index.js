const express = require('express');
const cors = require('cors');
const employeeRouter = require('./routes/employee.route.js');
const adminRouter = require('./routes/admin.route.js');
const connectMongoDB = require('./config/config.js');
require('dotenv').config();

// Initialize Express app and define the port
const app = express();
const PORT = process.env.PORT || 8080; 

// Connect to MongoDB
connectMongoDB();

// Check if CORS is installed correctly
try {
    app.use(cors({
        origin: 'http://localhost:3001', // Adjust to your frontend URL
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        credentials: true,  // Allow cookies if required
    }));
    console.log("CORS is enabled");
} catch (error) {
    console.error("Error enabling CORS:", error);
}

// Middleware setup
app.use(express.json());

// Routes
app.use('/api', employeeRouter);
app.use('/api/admin', adminRouter);

// Start the server
app.listen(PORT, () => {
    console.log(`Backend is listening on PORT ${PORT}`);
});