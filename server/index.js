require('dotenv').config();

const express = require('express');
const cors = require('cors');
const connection = require('./db');
const authRoutes = require('./routes/authRoutes');
const postRoutes = require('./routes/postRoutes');
const userRoutes = require('./routes/userRoutes');

const app = express();

connection();


app.use(cors( {
    origin: ['http://localhost:5173', 'https://tala-app.netlify.app'],
    credentials: true
}));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); // Allows all origins
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS'); // Allowed HTTP methods
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization'); // Allowed headers
    res.setHeader('Access-Control-Allow-Credentials', true); // Allow credentials (if needed)
    next();
});


app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/post', postRoutes);
app.use('/api/users', userRoutes);

// Start the server
const port = process.env.PORT || 5003;
app.listen(port, () => console.log(`Server running on port ${port}`));
