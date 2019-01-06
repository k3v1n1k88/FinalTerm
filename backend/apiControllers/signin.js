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
router.get('/', function(req, res, next) {
    res.send({
        return_code: 405,
        msg: 'expected POST method but got a GET method'
    });
});

router.post('/', function(req, res, next) {
	var username = req.query.username;
	var password = req.query.password;

	console.log(`username = ${username} password = ${password}`);
	console.log(`url database: ${url_database}`)

	//var data = "123";
	//access database
	axios.get(url_database, {
        params: {
            username: username, // Generates http://localhost:1337/posts?_sort=createdAt:desc
            password: password
        }
    })
    .then(response => {
        console.log(response.data)
    	res.setHeader('Content-Type', 'application/xml');
		res.send(response.data);
    })
    .catch(error => {
        // Handle error.
        // res.writeHead(200, {'Content-Type': 'text/plain'});
        // console.log('An error occurred:', error);
        res.send(err);
        // data = err;
	});

    //res.json(data);
	// axios
	//   .get(url_database, {
	//     params: {
	//       _sort: 'createdAt:desc' // Generates http://localhost:1337/posts?_sort=createdAt:desc
	//     }
	//   })
	//   .then(response => {
	//     // Handle success.
	//     console.log('Well done, here is the list of posts: ', response.data);
	//   })
	//   .catch(error => {
	//     // Handle error.
	//     console.log('An error occurred:', error);
	//   });

});

module.exports = router;