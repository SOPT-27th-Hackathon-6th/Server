const express = require('express');
const percentController = require('../controllers/percentController')
const router = express.Router();

//router.post('/malaStamp', malaController.createPost);
router.get('/', percentController.getMalaPercent);


module.exports = router;