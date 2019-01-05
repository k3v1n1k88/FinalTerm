var express = require('express');
var router = express.Router();

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
	next();
});

module.exports = router;