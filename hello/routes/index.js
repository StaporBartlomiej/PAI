var express = require('express');
var router = express.Router();
var mysql = require('mysql');






/* GET home page. */
router.get('/', function(req, res, next) {
  var test = 'huehue';
  var query = 'select * from country;';
  var db = mysql.createConnection({
    host: '172.30.24.12',
    user: 'dzida_1119580',
    password: '58118057',
    database: 'DZIDA'
    
    });
    db.connect();
    //res.render('index', { title: 'Express'});
    db.query(query, function(error, dane) {
        res.render('index', {title: 'Express', dane: dane});
    });
});

router.get('/cos', function(req, res, next) {
    res.render('index2', { title: 'Bartek' });
});

router.post('studentuj', function (req,res) {
    res.render('index3', {title: req.body.student});

});

router.post('/register', function (req,res) {
    res.render('index2', {title: "test"});

});

module.exports = router;
