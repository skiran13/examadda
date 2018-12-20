var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Question = require('../questions/Question');

var examSchema = Schema({
	name: String,
	code: Number,
	link: String
});

module.exports = mongoose.model('Exam', examSchema);