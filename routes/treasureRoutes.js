const express = require('express');
const { findTreasures } = require('../controllers/treasureController');
const router = express.Router();

router.get('/treasures', findTreasures);

module.exports = router;
