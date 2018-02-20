//global variables
var number1 = 1;
var number2 = 11;
var output = document.getElementById("output");
var trigger = document.getElementById("trigger");

//regular function with a return value
function calculate() {

	//local variables 
	var result = number1 + number2;
	return result;
}

//console to debug and instant return inro
//always string returns to the console
//need to call the function
console.log(calculate());
'use strict'; 

//ECMA6 arrow function 
//more straight away to make this function 
var result = () => number1 + number2; //no conflict here because this is global varibale and in function is local variable 
//you give the possibility to make arguments in the brackets
//with multiple statements you need to include the function body {} 

console.log(result()); //result is a function now because of the fat arrow and it needs the () to be read as a function by the engine 

//capture user input - function with user input

function userInput() {
	'use strict'; //to avoid erors??
	//restricting the scope to the actuall code block, statement or expression 
	//to capture user input we use prompt
	let number1 = parseInt(prompt('Type a number: ', '')); //taking two arguments - stirng message ou message to the user and string value - if you want user to put value you live it blank 

	//when the firts line is excevute then the second one is open
	let number2 = parseInt(prompt('Type a number: ', '')); //this outputs a sting! 
	let result = number1 + number2; //parsing string into int
	//the result into the output
	output.innerHTML = 'Your result is ' + result + '!';

}

userInput();

//constructor function

function player (name, score){
	'use strict'
	this.name = name;
	this.score = score;
	
	this.greeting = function() {
		alert('Hi ' + this.name + ': Your score is ' + this.score);
	};
	
}

var myPlayer = new player('Peter', 35);
myPlayer.greeting();

//multidementional array
//creating m.dimentional array using litteral notation (direct??)
var playerScore = [
	['Jessica', 0], 
	['Simone', 7],
	['Vladimir', 9],
	['Ida', 10],
];

playerScore.push(['Peter', 65]);

console.log(playerScore);

function listPlayers() {
	'use strict'
	for(var i=0; i<playerScore.length; i++) {
		output.innerHTML += '<br>' + playerScore[i] + '<br>';
	}
}
trigger.addEventListener('click', listPlayers);