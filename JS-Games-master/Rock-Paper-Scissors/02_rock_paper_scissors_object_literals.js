// a module defined using object literal notation
// https://addyosmani.com/resources/essentialjsdesignpatterns/book/#modulepatternjavascript

//pretty much like a class - instantiating an object without "new"
//making an objects on the fly 
var myGame = {
		// In object literal notation, an object is described as a set of comma-separated name/value pairs enclosed in curly braces.
		// Names inside the object may be either strings or identifiers that are followed by a colon.
		// object literals can contain properties and methods:

		//object properties 
		//variableKey : variableValue, - pattern
		playerChoiceDisplay: document.getElementById("player_choice"), // display player's choice
		computerChoiceDisplay: document.getElementById("computer_choice"), // display computer's choice
		resultDisplay: document.getElementById("result"), // display the game result

		// other global variables
		computerChoice: '',
		userChoice: '',



		// a method  - template
		//functionkey: function () {
		//	'use strict';
		//},

		//refactoring the function 
		computerInput : function() {

			switch (Math.floor(Math.random() * 3)) //return a whole number between 0-2 
			{
				case 0:
					this.computerChoice = "Rock"; //using this! not using the variable but changing poperties 
					break;

				case 1:
					this.computerChoice = "Paper";
					break;

				case 2:
					this.computerChoice = "Scissors";
					break;
			}

			//console.log(computerChoice);
		},

	compare : function() {
		//game is a draw - remis
		//=== compares if they are equal and also compares the data types 
		if (this.userChoice === this.computerChoice) {
			this.resultDisplay.innerHTML = 'Game is a draw';
		}
		//all other possibilities 
		else if (this.userChoice === 'Paper' && this.computerChoice === 'Rock') {
			this.resultDisplay.innerHTML = 'You win! Wohooo!!';
		} else if (this.userChoice === 'Paper' && this.computerChoice === 'Scissors') {
			this.resultDisplay.innerHTML = 'You loose! Buuuu!';
		} else if (this.userChoice === 'Scissors' && this.computerChoice === 'Rock') {
			this.resultDisplay.innerHTML = 'You loose! Buuuu!';
		} else if (this.userChoice === 'Scissors' && this.computerChoice === 'Paper') {
			this.resultDisplay.innerHTML = 'You win! Wohooo!!';
		} else if (this.userChoice === 'Rock' && this.computerChoice === 'Paper') {
			this.resultDisplay.innerHTML = 'You loose! Buuuu!';
		} else if (this.userChoice === 'Rock' && this.computerChoice === 'Scissors') {
			this.resultDisplay.innerHTML = 'You win! Wohooo!!';
		}
	},

	 display:function() {
		//to make user and computer choice visible 
		this.playerChoiceDisplay.innerHTML = this.userChoice;
		this.computerChoiceDisplay.innerHTML = this.computerChoice;

	}

};

var buttons = document.getElementsByClassName("button"); // returning an array
//assigning event listener to each of the buttons 
for (var i = 0; i < buttons.length; i++) {
			buttons[i].addEventListener('click', play); //event listener triggers function called play 
	
}
	///// module end /////
	//eveything is an object, it makes our code logic reusable 

	function play() {
		//myGame.functionkey();
		myGame.userChoice = this.id;
		myGame.computerInput();
		myGame.compare();
		myGame.display();
	}

	 