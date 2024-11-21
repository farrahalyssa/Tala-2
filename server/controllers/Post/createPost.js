const Post = require('../../models/postModel'); 
const mongoose = require('mongoose');

exports.createPost = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173'); 
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Credentials', 'true');

    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }
    if (req.method === 'GET') {

  const { description, postedBy } = req.body;

  if (!description || !postedBy) {
    return res.status(400).send({ message: 'Description and postedBy are required.' });
  }

  try {
    const newPost = new Post({
      description,
      postedBy, 
    });

    await newPost.save();

    res.status(201).send({ message: 'Post created successfully!', post: newPost });
  } catch (error) {
    console.error('Error saving post:', error);
    res.status(500).send({ message: 'Internal Server Error' });
  }
  res.status(405).json({ message: 'Method not allowed' }); 
}
};
