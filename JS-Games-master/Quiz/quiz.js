/****************************
	
	Create a quiz based on the array "questions" ['question', correct answer].
	Each question must be presented using the prompt() method, allow user input and provide feedback using alert() - either "Correct!" or "Sorry. The correct answer is [correct number].)
	
	After the quiz is finished the overall result is published: "You got [number of correct answered questions] out of [questions in total] questions correct!"
	
	
	****************************/
var questions = [							 
		['How many moons does Earth have?', 1],					 
		['How many moons does Saturn have?', 31],
		['How many moons does Venus have?', 0]	
	];

//var yourName = prompt('Please enter your name','')

var message = document.getElementById('message');
var score = 0;

function userInput() {
	'use strict'; 
	//counting array within array, so the first [] is which array in general it is and second [] is which thing within this array is SO [0,0] is //Earth and [0][1] is answer which is 1, 
	//then [1][0] is Saturn answer [1,1] = 31,
	//Venus [2][0] answer [2][1] = 0
	let number1 = parseInt(prompt(questions[0][0], ''));
	
	if (number1 === questions[0][1]) {
		alert('Correct!');
		score++;
		
	}
	else 
	{
		alert('Your answer is incorrect. Earth have just '  + questions[0][1] + ' moon');
	}
	
	
	
	let number2 = parseInt(prompt(questions[1][0], ''));
	if (number2 === questions[1][1]) {
		alert('Correct!');
		score++;
		
	}
	else 
	{
		alert('Your answer is incorrect. Saturn have ' + questions[1][1]  + ' moons!');
		
	}
	
	
	
	let number3 = parseInt(prompt(questions[2][0], ''));
	if (number3 === questions[2][1]) {
		alert('Correct!');
		score++;
		
	}
	else 
	{
		alert('Your answer is incorrect. Venus have ' + questions[2][1] + ' moons!' );
	}
	
	
	message.innerHTML = 'Your result is ' + score + ' correct! Out of: ' + questions.length;
	

}
userInput();

