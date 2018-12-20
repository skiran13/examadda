/*******************************
**********Question ROUTES*******
*******************************/
var QuestionController = require('../questions/QuestionController');
var questionController = new QuestionController();
var ExamController = require('../exams/ExamController');
var examController = new ExamController();
const express = require('express');
const router = express.Router();


	router.post('/addquestion', questionController.addQuestion);
	
	router.post('/api/viewquestions', questionController.getQuestions);

	router.post('/api/getquestion', questionController.getQuestion);

    router.post('/addexam', examController.addExam);

    router.get('/api/viewexam', examController.getExams);

	router.post('/deleteexam',  examController.deleteExam);
	
	router.get('/searchexam',examController.showExam)

	module.exports = router;

