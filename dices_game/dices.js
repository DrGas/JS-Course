function humanName() {
	'use strict';
    var human = prompt("Please enter your name", " ");
    if (human !== null) {
        document.getElementById("human").innerHTML =
        "Hello " + human;
    }
}
humanName();




var dice1 = 0;
var dice2 = 0;
var resultComputer;
var resultHuman;
var newGame = document.getElementById("playAgain");
var scoreComputer = 0;
var scoreHuman = 0;

var dice1Computer = document.getElementById("dice1computer");
var dice2Computer = document.getElementById("dice2computer");

var dice1Human = document.getElementById("dice1human");
var dice2Human = document.getElementById("dice2human");


var resultComputerDisplay = document.getElementById("resultComputer");
var resultHumanDisplay = document.getElementById("resultHuman");

var computerPoints = document.getElementById("computerPoints");
var humanPoints = document.getElementById("humanPoints");
 


var finalScoreDisplay = document.getElementById("whoWins");



class Dice {
	constructor(dice1, dice2) {
		this.dice1 = dice1;
		this.dice2 = dice2;
	}

	rollDices() {
		dice1 = (Math.floor(Math.random() * 6) + 1);
		dice2 = (Math.floor(Math.random() * 6) + 1);
		//console.log("Computer rolled: " + dice1);
		//console.log("Computer rolled: " + dice2);
		dice1Computer.innerHTML = "Dice 1: " + dice1;
		dice2Computer.innerHTML = "Dice 2: " + dice2;


	}

	calculate() {
		resultComputer = dice1 + dice2;
		//console.log("Computer score: " + resultComputer);
		resultComputerDisplay.innerHTML = "Computer score: " + resultComputer;

	}
}


var MyDice = new Dice();
MyDice.rollDices();
MyDice.calculate();


class Player extends Dice {

	constructor() {
		super(); //inherits the constructor 
	}

	rollDices() {
		dice1 = (Math.floor(Math.random() * 6) + 1);
		dice2 = (Math.floor(Math.random() * 6) + 1);
		//console.log("You rolled: " + dice1);
		//console.log("You rolled: " + dice2);
		dice1Human.innerHTML = "Dice 1: " + dice1;
		dice2Human.innerHTML = "Dice 2: " + dice2;
	}

	calculate() {
		resultHuman = dice1 + dice2;
		//console.log("Your score: " + resultHuman);
		resultHumanDisplay.innerHTML = "Your score: " + resultHuman;

	}

}

var MyPlayer = new Player();
MyPlayer.rollDices();
MyPlayer.calculate();

function compare() {
	'use strict';
	if (resultComputer === resultHuman) {
		console.log("It's a draw");
		finalScoreDisplay.innerHTML = "It's a draw";
	} else if (resultComputer > resultHuman) {
		scoreComputer++;
		//console.log("You loose :(");
		finalScoreDisplay.innerHTML = "You loose :(";
		//console.log("Computer score: " + scoreComputer + " Human score: " + scoreHuman ); 
		computerPoints.innerHTML = "Computer points: " + scoreComputer;
	} else if (resultComputer < resultHuman) {
		scoreHuman++;
		//console.log("Very much a winner YES!!");
		finalScoreDisplay.innerHTML = "Very much a winner YES!!";
		//console.log("Human score: " + scoreHuman + " Computer score: " + scoreComputer);
		humanPoints.innerHTML = "Your points: " + scoreHuman;
	}
}

compare();


function NewGame() {
	'use strict';

	var MyDice = new Dice();
	MyDice.rollDices();
	MyDice.calculate();

	var MyPlayer = new Player();
	MyPlayer.rollDices();
	MyPlayer.calculate();

	compare();
}

newGame.addEventListener('click', NewGame);


