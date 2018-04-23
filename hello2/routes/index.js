var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/cos ', function(req, res, next) {
    res.render('index2', { title: 'Bartek' });
});

router.post('/studentuj', function(req, res, next) {
    res.render('index', {title: req.body.student});
});

module.exports = router;
