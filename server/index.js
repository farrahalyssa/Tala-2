require('dotenv').config()
require('./models/userModel'); 
require('./models/postModel'); 

const express = require('express')
const app = express()
const cors = require('cors')
const connection = require('./db')
const authRoutes = require('./routes/authRoutes')
const postRoutes = require('./routes/postRoutes')
const userRoutes = require('./routes/userRoutes');


//database connection
connection();

//middelwares
app.use(express.json())
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'https://tala-app.netlify.app'); 
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS'); // Allow HTTP methods
    res.setHeader('Access-Control-Allow-Headers', '*'); 
    if (req.method === 'OPTIONS') {
        res.status(200).end(); // Preflight request handling
        return;
    }
    next();
});

// routes
app.use('/api/auth', authRoutes)
app.use('/api/post', postRoutes)
app.use('/api/users', userRoutes)


const port = process.env.PORT || 8080
app.listen(port, ()=> console.log(`Server running on port ${port}`))
