'use strict';
var Exam = require('./Exam.js');
var Question = require('../questions/Question.js');

var ExamController = function(){


	this.addExam = function(req, res){
		var title = req.body.title;
		var code = req.body.examcode;
		var link = req.body.link;

		var exam = new Exam(req.body);
		exam.name = title;
		exam.code = code;
		exam.link = link;

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

	this.showExam = function(req, res){
		Exam.find( {} )
		.exec(function(err, result){
			if(err) { return next(err); }
			res.json(result);
		});
	};

};

module.exports = ExamController;