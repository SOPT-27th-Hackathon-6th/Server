const express = require('express');
const riceController = require('../controllers/riceController')
const router = express.Router();

router.post('/', riceController.createPost);
router.get('/', riceController.getRice);


module.exports = router;