const express = require('express');
const malaController = require('../controllers/mala')
const router = express.Router();

router.get('/', malaController.getUser);

module.exports = router;