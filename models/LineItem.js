var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var LineItem = new Schema({
    title: String,
    milestone: String,
    price: Number
});

module.exports = mongoose.model('LineItem', LineItem);
