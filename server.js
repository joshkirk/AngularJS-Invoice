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
app.use('/api', router);

// MODELS
// var Invoice = require('./models/Invoice.js')
// var LineItem = require('./models/LineItem.js')

// ROUTES
router.route('/invoice')
    .post(function(req, res) {
        //TODO
    })
    .get(function(req, res) {
        //TODO
    });

router.route('/invoice/:id')
    .post(function(req, res) {
        //TODO
    })
    .get(function(req, res) {
        //TODO
    })
    .delete(function(req, res) {
        //TODO
    });

router.route('/invoice/:id/lineitem')
    .post(function(req, res) {
        //TODO
    })
    .get(function(req, res) {
        //TODO
    });

router.route('/invoice/:id/lineitem/:item_id')
    .post(function(req, res) {
        //TODO
    })
    .get(function(req, res) {
        //TODO
    })
    .delete(function(req, res) {
        //TODO
    });

router.route('/invoice/:id/note')
    .post(function(req, res) {
        //TODO
    })
    .get(function(req, res) {
        //TODO
    });

router.route('/invoice/:id/note/:note_id')
    .post(function(req, res) {
        //TODO
    })
    .get(function(req, res) {
        //TODO
    })
    .delete(function(req, res) {
        //TODO
    });

// fire it up
app.listen(process.env.PORT || 3000, function () {
  console.log('Server Online');
});
