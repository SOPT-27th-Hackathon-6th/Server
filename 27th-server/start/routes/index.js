var express = require('express');
var router = express.Router();



router.use('/test', require('./test'))

router.get("/", function (req, res, next) {
    res.render("index");
});
  
router.get("/checkout", function (req, res, next) {
    res.render("checkresult");
});

module.exports = router;
