'use strict';
const db = require('_helpers/db');
const mongoose = require('mongoose');
const Exam = db.Exam;
const Question = db.Question;

var QuestionController = function(){


	this.addQuestion = function(req, res){
		console.log(req.body)
		var examcode = req.body.examcode;
		var title = req.body.title;
		var image = req.body.image;
		var option1 = req.body.option1;
		var option2 = req.body.option2;
		var option3 = req.body.option3;
		var option4 = req.body.option4;
		var options = [ option1, option2, option3, option4];
		var correct = req.body.correct;
		var question = new Question(req.body);
		question.ofExam = examcode;
		question.title = title;
		question.image = image;
		question.options = options.map( function(element, index){
			if( correct == index+1){
				return {
					name: element,
					correct: true
				}
			}
			else{
				return {
					name: element,
					correct: false
				}
			}
		});
		 question.save();

	};



	this.getQuestions = function(req, res){console.log(req.body)
		Question.find({ 'ofExam': req.body.examcode }, function(err, docs){
			res.json(docs);
		});
	};

	this.getQuestion = function(req, res){console.log(req.body)
		
		Question.aggregate([
			{ $sample: {size: 20} }, 
			{ $match:  {ofExam: Number(req.body.examcode)} 
		}], function(err, docs){
			res.json(docs);
		});
	};


};

module.exports = QuestionController;