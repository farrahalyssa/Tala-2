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
};

module.exports = getUserData;
