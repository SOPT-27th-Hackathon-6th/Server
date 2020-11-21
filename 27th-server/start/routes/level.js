const express = require('express');
const levelController = require('../controllers/levelController')
const router = express.Router();



router.get('/:foodType/:levelNum', levelController.getLevel)

module.exports = router;