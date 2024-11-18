require('dotenv').config()
require('./models/userModel'); 
require('./models/postModel'); 

const express = require('express')
const serverless = require('serverless-http');

const app = express()
const cors = require('cors')

const connection = require('./db')
const authRoutes = require('./routes/authRoutes')
const postRoutes = require('./routes/postRoutes')
const userRoutes = require('./routes/userRoutes');


//database connection
connection();

//middelwares
app.options('*', cors());

app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Specify allowed HTTP methods
    allowedHeaders: ['Content-Type', 'Authorization'], // Specify allowed headers
    credentials: true, // Allow cookies if needed
}));

app.use(express.json())
// routes
app.use('/api/auth', authRoutes)
app.use('/api/post', postRoutes)
app.use('/api/users', userRoutes)


const port = process.env.PORT || 5001
app.listen(port, ()=> console.log(`Server running on port ${port}`))
module.exports.handler = serverless(app);
