'use strict';
var Exam = require('./Exam.js');
var Question = require('../questions/Question.js');

var ExamController = function(){


	this.addExam = function(req, res){
		var title = req.body.title;
		var code = req.body.examcode;

		var exam = new Exam(req.body);
		exam.name = title;
		exam.code = code;

		exam.save(function(err){
			if(err) { return next(err); }
		});
	};
 
	this.deleteExam = function(req, res){
		Exam.remove({'code': req.body.examcode}, function(err){
			if(err) { return next(err); }
		});
	};


	this.getExams = function(req, res){
		Exam.find( {} )
		.exec(function(err, result){
			if(err) { return next(err); }
			res.json(result);
		});
	};


};

module.exports = ExamController;