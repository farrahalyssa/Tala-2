require('dotenv').config();
require('./models/userModel');
require('./models/postModel');

const express = require('express');
const cors = require('cors');
const connection = require('./db');
const authRoutes = require('./routes/authRoutes');
const postRoutes = require('./routes/postRoutes');
const userRoutes = require('./routes/userRoutes');

const app = express();

// Database connection
connection();


// CORS Middleware
app.use(cors({
    origin: 'http://localhost:5173', // Dynamically allow the appropriate origin
    credentials: true, // Allow cookies if needed
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'PATCH'],
    allowedHeaders: ['Origin', 'X-Requested-With', 'Content-Type', 'Accept', 'Authorization'], // Allow these headers
}));

// Handle preflight OPTIONS requests
app.options('*', cors());

// Parse JSON bodies
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/post', postRoutes);
app.use('/api/users', userRoutes);

// Start the server
const port = process.env.PORT || 5003;
app.listen(port, () => console.log(`Server running on port ${port}`));
