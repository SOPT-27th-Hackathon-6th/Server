var express = require('express');
var router = express.Router();

router.use('/rice', require('./rice'))

router.get("/", function (req, res, next) {
    res.render("index");
});
  
router.get("/checkout", function (req, res, next) {
    res.render("checkresult");
});

module.exports = router;
