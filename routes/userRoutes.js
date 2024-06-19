const express = require('express');
const { getUserDetails } = require('../controllers/userController');
const router = express.Router();

router.get('/users/:id', getUserDetails);

module.exports = router;
