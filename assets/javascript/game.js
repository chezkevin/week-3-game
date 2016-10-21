var answers = ["mew","gastly","onix","bulbasaur","squirtle","charmander","xerneas"];

var wins = 0;
var attempts = 0;
var maxAttempts = 10;
var attemptsLeft;
var lettersGuessed="";
var pokemonName;
var workingAnswer = new Array();

// Validate variable is a letter
function isLetter(input){
	var letters = /^[A-Za-z]+$/;
		if(input.match(letters)){
			return true;
		}
	else{
		alert("Please type a letter.");
		return false;
	}
}

// When the user presses the key it records the keypress and then sets it to userInput
document.onkeyup = function(event) {
	var userInput = String.fromCharCode(event.keyCode).toLowerCase();
	
	if (isLetter(userInput)){
		// If user ran out of attempts. . .
		if (attempts === maxAttempts){
			alert("Sorry, you are not a Pokemon Master. Try again!");
			attempts = 0;
			lettersGuessed = "";
			startGame();
		}

		// Update stats every time user guesses
		attempts = attempts + 1;
		lettersGuessed = lettersGuessed + userInput + ",";

		//Display the letters guessed by the user
		document.querySelector('#letters-guessed').innerHTML = lettersGuessed;
		
		//Display the number of attempts remaining
		attemptsLeft = maxAttempts - attempts;
		document.querySelector('#guesses-remain').innerHTML = attemptsLeft;
		
		// If userInput matched any value from the pokemonName
		for (var i = 0; i < pokemonName.length; i++){
			console.log("userInput: " + userInput +
				"    pokemonName letter: " + pokemonName.charAt(i) +
				"    pokemonName: " + pokemonName +
				"    workingAnswer: " + workingAnswer[i]
				);
			// If user guessed right
			if ( userInput === pokemonName.charAt(i) ){
				workingAnswer[i] = userInput;
				document.querySelector('#answer-blanks').innerHTML = workingAnswer.join('');
			}
		}

		// If user guessed all of them correctly
		if (workingAnswer.includes("_ ") === false){
			reStartGame();
		}
	}
}

function startGame(){
	workingAnswer = new Array();

	// Pick a Pokemon name, randomly
	pokemonName = answers[Math.floor(Math.random() * answers.length)];
	console.log(pokemonName);

	// Display the number of wins
	document.querySelector('#num-wins').innerHTML = wins;

	//Display answer as blanks
	for (var i = 0; i < pokemonName.length; i++){
		workingAnswer[i] = "_ ";
	 	}

	// Display letters guessed
	document.querySelector('#letters-guessed').innerHTML = lettersGuessed;

	//Display max attempts
	document.querySelector('#guesses-remain').innerHTML = maxAttempts;
	
	//Display the working answer (initially, in blanks)
	document.querySelector('#answer-blanks').innerHTML = workingAnswer.join('');
}

function reStartGame(){
	attempts = 0;
	wins = wins + 1;
	lettersGuessed = "";
	setTimeout(function() {alert("Wow! You're a Pokemon Master!"); startGame();}, 0);
}

startGame();