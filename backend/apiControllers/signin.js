var express = require('express');
var router = express.Router();
var axios = require('axios');
var config = require('../config.json')
var jwt = require('jsonwebtoken');

// var User = require('./model/User');


//create url database from config file
var databse_name = config.database.database_name;
var host = config.database.host;
var port = config.database.port;

var url_database = 'http://'+host+':'+port+'/'+databse_name; 
// var url_database = 'http://'+host+':'+port+'/'+'posts'; 

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send({
        return_code: 405,
        msg: 'expected POST method but got a GET method'
    });
});

router.post('/', function(req, res, next) {
	var username = req.body.username;
	var password = req.body.password;
	var secret_key = config.api_key;

    console.log(`username = ${username} password = ${password} secret_key = ${secret_key}`);
    console.log(`url database: ${url_database}`)

    if(username === undefined || password === undefined)
        throw Error('username or password is not valid');
	

	axios.get(url_database, {
        params: {
            username: username, 
            password: password
        }
    })
    .then(response => {
        console.log(response.data)
        if(response.data === undefined || response.data.length == 0 ) throw Error('Invalid username or password');

        var data = response.data[0];
        var username = data.username;
        var password = data.password;
        var permission = data.permission;

        var account_name = data.account_name;

        var payload = {
        	username: username,
        	password: password,
        	permission: permission
        }

        jwt.sign(payload, secret_key, { expiresIn: '1h' },(err, token) => {
            if(err) { 
            	console.log(err); 
            	throw Error('Error when generate token',err);
            }
            console.log(token);
            res.send({
				return_code : 200,
				msg: 'success',
				token: token,
				account_name: account_name,
				permission: permission
			});
        });
		
    })
    .catch(error => {
        console.log(error);
        res.send({
        	return_code: 403,
        	msg: error.message
        });
	});

});

module.exports = router;