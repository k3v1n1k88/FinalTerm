var express = require('express');
var router = express.Router();
var axios = require('axios');
var config = require('../config.json')

// var User = require('./model/User');


//create url database from config file
var databse_name = config.database.database_name;
var host = config.database.host;
var port = config.database.port;

var url_database = 'http://'+host+':'+port+'/'+databse_name; 
// var url_database = 'http://'+host+':'+port+'/'+'posts'; 

/* GET users listing. */
router.post('/', function(req, res, next) {

    var username = req.query.username;
    var password = req.query.password;
    var permission = req.query.permission;
    var email = req.query.email;
    var account_name = req.query.account_name;
    var phone = req.query.phone;
    var account_number = req.query.account_number;
    var deposit = req.query.deposit;

    console.log(`username = ${username},password = ${password},permission = ${permission},email = ${email},account_name = ${account_name},phone = ${phone},account_number = ${account_number},deposit = ${deposit}`);

    res.json({
    	return_code: 200,
    	msg: 'success'
    })
});