<<<<<<< HEAD
const mongoose = require('mongoose'); 
const { User } = require('../../models/userModel');

const getUserData = async (req, res) => {
  const { userId } = req.params;

  console.log('Received userId:', userId);

  if (!userId) {
    return res.status(400).send({ message: 'No userId provided.' });
  }

  // Validate userId as a MongoDB ObjectId
  if (!mongoose.Types.ObjectId.isValid(userId)) {
    return res.status(400).send({ message: 'Invalid userId format.' });
  }

  try {
    // Convert userId to ObjectId
    const userObjectId = new mongoose.Types.ObjectId(userId);

    // Query the database
    const userData = await User.findOne({ _id: userObjectId }).lean();

    if (!userData) {
      return res.status(404).send({ message: 'User not found.' });
    }

    res.status(200).json(userData);
  } catch (error) {
    console.error('Error fetching user data:', error);
    res.status(500).send({ message: 'Internal Server Error' });
  }
=======
const {User} = require('../../models/userModel')

const getUserData = async (req, res) => {
    const { userId } = req.params;
    if (!userId) {
        return res.status(400).send({ message: 'No userId fetched.' });
    }

    try {
        const userData = User.findOne({ userId: userId });
        res.status(200).send(userData);
    } catch (error) {
        console.error('Error fetching user data:', error);
        res.status(500).send({ message: 'Internal Server Error' });
    }
>>>>>>> f6d6bce4d1d78d3a43491a153a8f1b5c71de9659
};

module.exports = getUserData;
