var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var DateDiff = require('date-diff');

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
    var book_in_place = req.body.book_in_place;
    var book_in_date = req.body.book_in_date;
    var book_in_time = req.body.book_in_time;
    var book_out_place = req.body.book_out_place;
    var book_out_date = req.body.book_out_date;
    var book_out_time = req.body.book_out_time;
    var consumer_name = req.body.consumer_name;
    var consumer_surname = req.body.consumer_surname;
    var consumer_email = req.body.consumer_email;
    var consumer_phone = req.body.consumer_phone;
    var chosen_car = req.body.chosen_car;
    var price;
    console.log(book_in_place);
    console.log(book_in_date);
    console.log(book_in_time);
    console.log(book_out_place);
    console.log(book_out_time);
    console.log(book_in_date);
    console.log(consumer_name);
    console.log(consumer_surname);
    console.log(consumer_email);
    console.log(consumer_phone);
    console.log(chosen_car);

    var book_in_date_converted_to_js_format = new Date(book_in_date);
    var book_out_date_converted_to_js_format = new Date(book_out_date);
    var car_price_query = "Select price_per_day from cars where car_name='" + chosen_car + "';";
    console.log(car_price_query);
    var myCar = new Object();

    var dupa = db.query(car_price_query,function (error,result) {
        console.log("price from db:" + result[0].price_per_day);
        myCar.make = result[0].price_per_day;
        return result[0].price_per_day;
    });
    console.log("dupa: " + dupa);
    var total_days_car_is_rented = new DateDiff(book_out_date_converted_to_js_format, book_in_date_converted_to_js_format);
    // var price =


    var query = "Insert into table reservations(consumer_name,consumer_surname,id_card_number,consumer_email,consumer_phone,book_in_date," +
        "book_out_date, total_price)";

    res.render('reserveResult', {title: "Reservation Details"});

});

function parseMysqlDateToJsDate(date) {
    console.log("Date in func:" + date);
    var a=date.split(" ");
    var d=a[0].split("-");
    var t=a[1].split(":");
    return new Date(d[0], (d[1] - 1), d[2], t[0], t[1], t[2]);
}
router.get('/reserve', function (req,res) {




    res.render('reserve', {title: "Reserve" });  //test: req.body.book_out_place

});

module.exports = router;
