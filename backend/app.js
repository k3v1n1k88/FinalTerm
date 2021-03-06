var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser');
var cors = require('cors');

var indexRouter = require('./apiControllers/index');
var signinRouter = require('./apiControllers/signin');
var getlistRouter = require('./apiControllers/getlist');
var createRouter = require('./apiControllers/create')
var addaccountRouter = require('./apiControllers/addaccount');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
app.use(cors())

app.use('/', indexRouter);
app.use('/signin', signinRouter);
app.use('/getlist', getlistRouter);
app.use('/create', createRouter);
app.use('/addaccount', addaccountRouter);

module.exports = app;
