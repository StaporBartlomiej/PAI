var express = require('express');
var router = express.Router();
var mysql = require('mysql');

var db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'admin',
    database: 'PAI_PROJECT'

});
db.connect();




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
    var query = "select * from cars order by cost_class;";

    // res.render('index', { title: 'Express'});t
    db.query(query, function(error, dane) {
        console.log(dane[0].car_name);
        res.render('flota', {title: 'Express', dane: dane});
    });
    // res.render('index2', {title: 'flota'});

});

router.get('/admin', function (req,res) {
    res.render('admin', {title: "Admin Panel"});

});

router.post('/reserveResult', function (req,res) {
    res.render('reserveResult', {title: "Reservation Details"});

});

function parseMysqlDateToJsDate(date) {
    var a=date.split(" ");
    var d=a[0].split("-");
    var t=a[1].split(":");
    var formatedDate = new Date(d[0],(d[1]-1),d[2],t[0],t[1],t[2]);
    return formatedDate;
}
router.get('/reserve', function (req,res) {
    // var book_in_place = req.body.book_in_place;
    // var book_in_date = req.body.book_in_date;
    // var book_in_time = req.body.book_in_time;
    // var book_out_place = req.body.book_out_place;
    // var book_out_date = req.body.book_out_date;
    // var book_out_time = req.body.book_out_time;
    // var consumer_name = req.body.consumer_name;
    // var consumer_surname = req.body.consumer_surname;
    // var consumer_email = req.body.consumer_email;
    // var consumer_phone = req.body.consumer_phone;
    // var temp;
    // temp = parseMysqlDateToJsDate(book_in_date);
    // book_in_date = temp;
    // temp = parseMysqlDateToJsDate(book_out_date);
    // book_out_date = temp;
    //  //returned from mysql timestamp/datetime field
    //
    //
    // var timeDifference = Math.abs(book_out_date.getTime() - book_in_date.getTime());
    // var differentDays = Math.ceil(timeDifference / (1000 * 3600 * 24));
    // var query = "Insert into table reservations(consumer_name,consumer_surname,id_card_number,consumer_email,consumer_phone,book_in_date," +
    //     "book_out_date, total_price)";



    res.render('reserve', {title: "Reserve" });  //test: req.body.book_out_place

});

module.exports = router;
