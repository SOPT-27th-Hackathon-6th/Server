const express = require('express');
const testController = require('../controllers/rice')
const router = express.Router();



router.get('/', testController.getUser);


module.exports = router;