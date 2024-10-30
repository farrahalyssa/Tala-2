const express = require('express');
const router = express.Router();
const searchUsers = require('../controllers/User/searchUsers')
const updateProfile = require ('../controllers/User/updateProfile')

router.get('/search', searchUsers)
router.put('/profile/:userId', updateProfile);





module.exports = router;
