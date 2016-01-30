var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var Invoice = new Schema({
    date: Date,
    dt: Date,
    our_address: String,
    our_address_linetwo: String,
    our_ctiy: String,
    our_zip: String,
    to_company: String,
    to_address: String,
    to_city: String,
    to_state: String,
    to_zip: String,
    addressee: String,
    personal: String,
    firstThead: String,
    secondThead: String,
    thirdThead: String,
    closing: String,
    signOff: String,
    number: Number,
    project_name: String,
    lead_in: String,
    total: Number,
});

module.exports = mongoose.model('Invoice', Invoice);
