const express = require('express');
const levelController = require('../controllers/levelController')
const router = express.Router();

router.get('/:foodType', levelController.getLevel)

module.exports = router;