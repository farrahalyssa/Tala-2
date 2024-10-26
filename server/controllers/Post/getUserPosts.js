const Post = require('../../models/postModel');

exports.getUserPosts = async (req, res) => {
  const { userId } = req.params;
  console.log(req.params); 

  try {
    const userPosts = await Post.find({ postedBy: userId })
      .populate('postedBy', 'firstName lastName') 
      .sort({ createdAt: -1 });

    res.status(200).send(userPosts, );
  } catch (error) {
    console.error('Error fetching user posts:', error);
    res.status(500).send({ message: 'Internal Server Error' });
  }
};
