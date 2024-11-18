require('dotenv').config()
require('./models/userModel'); 
require('./models/postModel'); 

const express = require('express')
const app = express()
const cors = require('cors')

const corsOptions = {
    origin: 'https://tala-app.netlify.app', 
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Add other methods if needed
    credentials: true, // Allow credentials (e.g., cookies, authorization headers)
  };
  
app.use(cors(corsOptions));
app.options('*', cors(corsOptions)); 
const connection = require('./db')
const authRoutes = require('./routes/authRoutes')
const postRoutes = require('./routes/postRoutes')
const userRoutes = require('./routes/userRoutes');


//database connection
connection();

//middelwares
app.use(express.json())
app.use(cors())


// routes
app.use('/api/auth', authRoutes)
app.use('/api/post', postRoutes)
app.use('/api/users', userRoutes)


const port = process.env.PORT || 5000
app.listen(port, ()=> console.log(`Server running on port ${port}`))
