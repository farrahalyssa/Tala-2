require('dotenv').config()
require('./models/userModel'); 
require('./models/postModel'); 

const express = require('express')
const serverless = require('serverless-http');

const app = express()
// const cors = require('cors')

const connection = require('./db')
const authRoutes = require('./routes/authRoutes')
const postRoutes = require('./routes/postRoutes')
const userRoutes = require('./routes/userRoutes');


//database connection
connection();

// const allowedOrigins = ['https://tala-app.netlify.app', 'http://localhost:5173'];

//middelwares
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'https://tala-app.netlify.app');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    if (req.method === 'OPTIONS') {
        return res.status(204).end(); // Handle preflight
    }
    next();
});



app.use(express.json())
// routes
app.use('/api/auth', authRoutes)
app.use('/api/post', postRoutes)
app.use('/api/users', userRoutes)


const port = process.env.PORT || 5001
app.listen(port, ()=> console.log(`Server running on port ${port}`))
module.exports.handler = serverless(app);
