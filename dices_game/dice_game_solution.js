// JavaScript Document


//classes always with capital letter
class Dice  {

	constructor(name) { //class needs a constructor with some properties 
		this.name = name; //this is ID
		this.face = 0;
	}

	rollDice() {
		this.face = Math.ceil((Math.random()) * 6); // returning whole number between 1 - 6
		console.log(this.name + ': ' + this.face);
		// printing the result
		//NAME IS TRANSFERED FROM CONSTRUCTOR 
		document.getElementById(this.name).innerHTML = this.face; //TAKING CARE OF THE OUTPUT ALREADY HERE
	}

	get result() {
			return this.face;
		}
		// END class Dice
}


//COMPUTER PLAYER AND HUMAN PLAYER ARE CREATED FROM THIS CLASS
class Player {

	constructor() {
		this.name = ''; //INITIALIZE IT WITH SOME KIND OF A VALUE = EMPTY STRING OR ZERO
		this.diceResult = 0; 
		this.score = 0;
	}

	playerName() {
		// prepare client storage for user + score if doesn't exist
		if (!localStorage.getItem('user')) { //CHECKING IF THERE IS ANYTHING IN LOCAL STORAGE
			localStorage.setItem('user', ''); //IF THERE IS NOTHING THEN SET THE ITEM
			localStorage.setItem('userScore', 0);
		}
		// prompt for user name if not yet set
		if (localStorage.getItem('user') === '') { //CHECKING IF THERE IS NAME IN LOCAL STORAGE
			this.name = prompt("Please enter your name", "Mr. X");
			// set username
			localStorage.setItem('user', this.name); //STORING USER NAME AND TRANSFERING IT TO LOCAL STORAGE, AND TRANSFERING IT TO CLASS PROPERTY 
		}
		// get player name from local storage
		var playername = localStorage.getItem('user');
		this.name = playername;
		this.score = localStorage.getItem('userScore');
		alert('Hi ' + this.name + ', your all-time score is ' + this.score + '.  Ready to roll?');
		document.getElementById("pName").innerHTML = this.name;
		document.getElementById("pScore").innerHTML = this.score;
	}

	//PLAYER NOW ROLL THE DICE
	rollDices(id1, id2, output) {
		let dice1 = new Dice(id1); //LET THIS IS ONLY USED IN THE SCOPE OF THE ROLLDICE METHOD
		dice1.rollDice();

		let dice2 = new Dice(id2);
		dice2.rollDice();

		this.diceResult = dice1.result + dice2.result;
		document.getElementById(output).innerHTML = this.diceResult;
	}

	get result() {
			return this.diceResult; 
		}
		// END class Player
}

/////////////////
// GAME LOGIC //
////////////////

function gameLoop() {
	'use strict';

	document.getElementById('playAgain').addEventListener('click', playAgain);
	document.getElementById('clearData').addEventListener('click', clearData);

	var player1 = new Player(); //INSTATNTIAING THE CLASS PLAYER 
	player1.playerName();// RUNNIG NAMING ROUTINE 
	//PRESULT IS CONNECTED TO THE OUTPUT 
	player1.rollDices('dice1', 'dice2', 'pResult'); //CALL DICES METHOD, IT EXPECT 3 ARGIMENTS TO BE DELIVERED, BECUASE THERE WERE SPECFIED IN THE METHOD ROLL DICE 
	

	var computer = new Player();
	computer.rollDices('dice3', 'dice4', 'cResult');

	compare();

	function compare() {
		if (player1.result < computer.result) {
			computer.score++;
			document.getElementById("winLoose").innerHTML = 'You loose!';
			document.getElementById("cScore").innerHTML = computer.score;
		} else if (player1.result > computer.result) {
			player1.score++;
			document.getElementById("winLoose").innerHTML = 'Nice one!';
			document.getElementById("pScore").innerHTML = player1.score;
			localStorage.setItem('userScore', player1.score);
			console.log('Score: ' + player1.score);
		} else {
			document.getElementById("winLoose").innerHTML = 'Draw...';
		}
	}

	function playAgain() {
		player1.rollDices('dice1', 'dice2', 'pResult'); //PLAYER AND COMPUTER NEED TO IMMIDAITELY ROLL THE DICE AGAIN SO CALL THE SAME OBJECT
		computer.rollDices('dice3', 'dice4', 'cResult');
		compare();
	}

	function clearData() {
		alert('Do you really want to clear ALL data?');
		localStorage.clear(); //FRESH START WITH THE NAME 
		location.reload();
		// Clear all keys
		// store.clearAll();
	}

}

gameLoop();