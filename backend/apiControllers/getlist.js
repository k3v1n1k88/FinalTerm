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
        return_code: 400,
        msg: 'expected POST method but got a GET method'
    });
});

router.post('/', function(req, res, next) {
	var token = req.headers['authorization'];
	console.log(req.headers['authorization']);

	if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });

	jwt.verify(token, config.api_key, function(err, decoded) {

	    if (err){
	    	console.log(err);
	    	return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
	    }
	    // res.status(200).send(decoded);
	    var payload = decoded;

	    var username = payload.username;
	    var password = payload.password;

	    axios.get(url_database, {
	        params: {
	            username: username, 
	            password: password
	        }
   		})
   		.then(response => {
   			var data = response.data;

   			if(response.data < 1 || response.data === undefined){
   				throw Error('khong the tim thay tai khoan')
   			}

   			data = response.data[0];
   			var list_accounts = data.list_accounts;

   			console.log(list_accounts);
   			res.send({
   				return_code: 200,
   				msg: 'success',
   				list_accounts: list_accounts
   			})
   		})
   		.catch(err =>{
   			console.log(err);
   			res.send({
   				return_code: 400,
   				msg: 'fail',
   				list_accounts: []
   			});
   			res.send({
				return_code : 200,
				msg: 'success',
				token: token,
				account_name: account_name,
				permission: permission
			});
   		})

	});


	});

module.exports = router;