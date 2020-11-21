const express = require('express');
const riceController = require('../controllers/rice')
const router = express.Router();



router.get('/', riceController.getUser);


module.exports = router;