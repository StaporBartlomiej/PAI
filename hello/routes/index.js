var express = require('express');
var router = express.Router();
var mysql = require('mysql');






/* GET home page. */
router.get('/', function(req, res, next) {
  var test = 'huehue';
  var query = 'select * from country;';
  var db = mysql.createConnection({
    host: '149.156.40.74',
    user: 'world',
    password: 'world',
    database: 'world'
    
    });
    db.connect();
    //res.render('index', { title: 'Express'});
    db.query(query, function(error, dane) {
        res.render('index', {title: 'Express', dane: dane});
    });
});

router.get('/api/country', function(req, res, next) {
    var query = 'select * from country;';
    var db = mysql.createConnection({
        host: '149.156.40.74',
        user: 'world',
        password: 'world',
        database: 'world'
    });
    db.connect();
    
    db.query(query, function(error, dane) {
        res.json(dane); // res.json
    });
    
    
});

router.get('/api', function(req, res, next) {
   res.render('api');
    
    
});

router.get('/api/countryPL', function(req, res, next) {
    var query = 'select * from country where name="Poland";';
    var db = mysql.createConnection({
        host: '149.156.40.74',
        user: 'world',
        password: 'world',
        database: 'world'
    });
    db.connect();
    
    db.query(query, function(error, dane) {
        res.json(dane); // res.json
    });
    
    
});



router.post('studentuj', function (req,res) {
    res.render('index3', {title: req.body.student});

});

router.post('/register', function (req,res) {
    res.render('index2', {title: "test"});

});

module.exports = router;
