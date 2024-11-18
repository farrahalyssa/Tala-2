require('dotenv').config();
require('./models/userModel');
require('./models/postModel');

const express = require('express');
const serverless = require('serverless-http');
const cors = require('cors');
const accessControlAllow = require('./accessControlAllow');

const connection = require('./db');
const authRoutes = require('./routes/authRoutes');
const postRoutes = require('./routes/postRoutes');
const userRoutes = require('./routes/userRoutes');

const app = express();

// Database connection
connection();

// Middlewares
app.use(cors({
    origin: ['https://tala-app.netlify.app', 'http://localhost:5173'], // Allowed origins
    credentials: true, 
}));

// Access Control Middleware
app.use("/api", accessControlAllow);
app.use(accessControlAllow);

// Parse JSON bodies
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/post', postRoutes);
app.use('/api/users', userRoutes);

// Server and Serverless Configuration
const port = process.env.PORT || 5002;

if (process.env.NODE_ENV !== 'serverless') {
    app.listen(port, () => console.log(`Server running on port ${port}`));
}

module.exports.handler = serverless(app);
