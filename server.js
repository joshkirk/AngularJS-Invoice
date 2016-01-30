var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose   = require('mongoose');
var router = express.Router();

app.use('/', express.static(__dirname + '/public')); // defaults to index.html

app.listen(process.env.PORT || 3000, function () {
  console.log('Server Online');
});
