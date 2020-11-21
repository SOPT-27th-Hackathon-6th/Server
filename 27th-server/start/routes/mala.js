const express = require('express');
const malaController = require('../controllers/test')
const router = express.Router();

router.get('/', malaController.getUser);

module.exports = router;