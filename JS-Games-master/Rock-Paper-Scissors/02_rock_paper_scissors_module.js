var myGame = (function () {

	// private variables
	var myVar = "some value or expression";
	
	var privateHumanScore = 0;
	var privateComputerScore = 0;

	// functions
	var myPrivateFunction;
	var myPrivatecomputerInput;
	var compare;
	
	

	// private functions
	myPrivateFunction = function() {
	
	};
	
	
	myPrivatecomputerInput = function() {

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

	
	return {
		// public functions
		compare: function() {
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
	};

	// gameModule end //
})();

myGame.myPublicFunction();