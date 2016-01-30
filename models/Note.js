var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var Note = new Schema({
    title: String,
    body: String
});

module.exports = mongoose.model('Note', Note);
