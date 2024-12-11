require('dotenv').config();

const express = require('express');

const cors = require('cors');

const connection = require('./api/db');
const authRoutes = require('./api/routes/authRoutes');
const postRoutes = require('./api/routes/postRoutes');
const userRoutes = require('./api/routes/userRoutes');

const app = express();

app.use(express.static('../client/dist'));
app.get('*', (req, res) => {
    res.sendFile(path.join('../client/dist', 'index.html'));
  });

connection();

app.use(express.json());

app.use((req,res,next) => {
    
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "*");
    res.setHeader("Access-Control-Allow-Methods", "*");
    next();
})

 app.use(cors());


// Routes
app.use('/api/auth', authRoutes);
app.use('/api/post', postRoutes);
app.use('/api/users', userRoutes);

// Start the server
const port = process.env.PORT || 5003;
app.listen(port, () => console.log(`Server running on port ${port}`));
