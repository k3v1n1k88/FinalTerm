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

    var username = req.body.username;
    var password = req.body.password;
    var permission = req.body.permission;
    var email = req.body.email;
    var account_name = req.body.account_name;
    var phone = req.body.phone;
    var account_number = req.body.account_number;
    var deposit = req.body.deposit;

    console.log(`username = ${username},password = ${password},permission = ${permission},email = ${email},account_name = ${account_name},phone = ${phone},account_number = ${account_number},deposit = ${deposit}`);

    var data = {
        username: username,
        password: password,
        permission: permission,
        email: email,
        account_name: account_name,
        phone: phone,
        list_accounts: [{ account_number: account_number, deposit: deposit }],
        history: []
    }
    console.log(data);
    axios.post(url_database,data)
    .then(response =>{
        res.json({
            return_code: 200,
            msg: 'success'
        })
    })
    .catch(error =>{
        console.log('An error occurred:', error);
        res.json({
            return_code: 400,
            msg: error.message
        })
    })
    
});
module.exports = router;