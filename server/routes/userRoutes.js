const express = require('express');
const router = express.Router();
const searchUsers = require('../controllers/User/searchUsers')


router.get('/search', searchUsers)





module.exports = router;
