require('dotenv').config();

const express = require('express');

const cors = require('cors');

const connection = require('./db');
const authRoutes = require('./routes/authRoutes');
const postRoutes = require('./routes/postRoutes');
const userRoutes = require('./routes/userRoutes');

const app = express();


connection();

app.use(express.json());
<<<<<<< HEAD
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '../client/dist')));


app.get('*', (_, res) => {
  res.sendFile(path.join(__dirname, '../client/dist'), (err) => {
    if (err) {
      res.status(500).send(err);
    }
  });
});

app.use(cors());
=======


 const allowedOrigins = ['https://tala-2.netlify.app', 'http://localhost:5173'];

 app.use(cors({
   origin: allowedOrigins,
   methods: ['GET', 'POST', 'PUT', 'DELETE'],
   credentials: true, 
 }));
>>>>>>> parent of 551bec3... temp

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/post', postRoutes);
app.use('/api/users', userRoutes);

// Start the server
const port = process.env.PORT || 5003;
app.listen(port, () => console.log(`Server running on port ${port}`));
