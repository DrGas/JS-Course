// The buttons
//getting buttons by class name and return it with array 
//everything that it is formated in the button class will be retuned in the array 
//the best way to treat the array is a loop
var buttons = document.getElementsByClassName("button"); // returning an array
//assigning event listener to each of the buttons 
for (var i = 0; i < buttons.length; i++) {
			buttons[i].addEventListener('click', play); //event listener triggers function called play 
}
// Variables for display purposes
var playerChoiceDisplay = document.getElementById("player_choice"); // display player's choice
var computerChoiceDisplay = document.getElementById("computer_choice"); // display computer's choice
var resultDisplay = document.getElementById("result"); // display the game result

// other global variables
var computerChoice;
var userChoice;

// main function containing the game logic!!!
//MODULARIZING YOUR CODE, MEANS TO CREATE AN INTERNAL SYSTEM OF DEPENEDENT FUNCTIONS, GLOBAL VARIABLES, AND FUNCTIONS WHICH ARE COLLECTED TOGETHER 
//DEPENDENG ON APPLICATION NEED - DESIGN PATTERN 
function play(){
	//.this in JS function conetext can refer to the current owner of the event 
	//you need to check what is the owner element 
	//button which is triggering the function is .this 
	userChoice = this.id; // registering the buttons id! - THIS REFERES TO ID OF THE BUTTON EX. PAPER AND IT IS STORED IN userChoice 
	computerInput();
	compare();
	display();	
}

function computerInput() {
	
	
	//use switch when you want to use simple comparison - when you compare one value, when it is moe complex use if else 
	//3 is a range of numbers that we want to get, and floor is a function returns the largest integer less than or equal to a given number
	switch (Math.floor(Math.random()*3))//return a whole number between 0-2 
	{
		case 0:
			computerChoice = "Rock";
			break;
			
		case 1:
			computerChoice = "Paper";
			break;
			
		case 2:
			computerChoice = "Scissors";
			break;
	}
	
	console.log(computerChoice);
}

function compare() {
	//game is a draw - remis
	//=== compares if they are equal and also compares the data types 
	if (userChoice === computerChoice) {
		resultDisplay.innerHTML = 'Game is a draw';
	}
	//all other possibilities 
	else if (userChoice === 'Paper' && computerChoice ==='Rock' ) {
				resultDisplay.innerHTML = 'You win! Wohooo!!';
	}
	
	else if (userChoice === 'Paper' && computerChoice ==='Scissors' ) {
				resultDisplay.innerHTML = 'You loose! Buuuu!';
	}
	
	else if (userChoice === 'Scissors' && computerChoice ==='Rock' ) {
				resultDisplay.innerHTML = 'You loose! Buuuu!';
	}
	
	else if (userChoice === 'Scissors' && computerChoice ==='Paper' ) {
				resultDisplay.innerHTML = 'You win! Wohooo!!';
	}
	
	else if (userChoice === 'Rock' && computerChoice ==='Paper' ) {
				resultDisplay.innerHTML = 'You loose! Buuuu!';
	}
	else if (userChoice === 'Rock' && computerChoice ==='Scissors' ) {
				resultDisplay.innerHTML = 'You win! Wohooo!!';
	}
}

function display() {
	//to make user and computer choice visible 
	playerChoiceDisplay.innerHTML = userChoice;
	computerChoiceDisplay.innerHTML = computerChoice;
	
}