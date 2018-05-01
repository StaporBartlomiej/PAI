var express = require('express');
var router = express.Router();
var mysql = require('mysql');






/* GET home page. */
router.get('/', function(req, res, next) {
  // var test = 'huehue';
  // var query = 'select * from country;';
  // var db = mysql.createConnection({
  //   host: '172.30.24.12',
  //   user: 'dzida_1119580',
  //   password: '58118057',
  //   database: 'DZIDA'
  //
  //   });
  //   db.connect();
    //res.render('index', { title: 'Express'});
    // db.query(query, function(error, dane) {
    //     res.render('index', {title: 'Express', dane: dane});
    // });
    res.render('index', {title: 'Express'});
});

router.get('/home', function(req, res, next) {
    res.render('index', { title: 'Home' });
});

router.get('/flota', function (req,res) {
    var test = 'huehue';
    var query = 'select * from cars;';
    var db = mysql.createConnection({
      host: '172.30.24.12',
      user: 'dzida_1119580',
      password: '58118057',
      database: 'DZIDA'

      });
      db.connect();
    res.render('index', { title: 'Express'});
    db.query(query, function(error, dane) {
        res.render('index', {title: 'Express', dane: dane});
    });
    res.render('index2', {title: 'flota'});

});

router.get('/admin', function (req,res) {
    res.render('index3', {title: "Admin Panel"});

});

module.exports = router;
