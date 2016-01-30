var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose   = require('mongoose');
var router = express.Router();

// point server on where static documents are
app.use('/', express.static(__dirname + '/public')); // defaults to index.html

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// fire it up
app.listen(process.env.PORT || 3000, function () {
  console.log('Server Online');
});
