var answers = ["Bulbasaur","Charmander","Squirtle"];

var wins = 0;
var attempts = 0;
var maxAttempts = 10;
var lettersGuessed;
var workingAnswer;
var pokemonName;

// When the user presses the key it records the keypress and then sets it to userInput
document.onkeyup = function(event) {
	var userInput = String.fromCharCode(event.keyCode).toLowerCase();
	
	if (attempts === maxAttempts){
		alert("Sorry, you are not a Pokemon Master. Try again!");
		attempts = 0;
		lettersGuessed = "";
		workingAnswer = "";
		startGame();
	}
	attempts = attempts + 1;

	// Check if userInput matched any value from the pokemonName
	for (var i = 0; i < pokemonName.length; i++){
		console.log("userInput: " + userInput +
			"    pokemonName letter: " + pokemonName.charAt(i) +
			"    workingAnswer: "+ workingAnswer);
		if (userInput === pokemonName.charAt(i)){
			workingAnswer = workingAnswer + userInput;
			alert("You got one!");
		}
		else{
			workingAnswer = workingAnswer + "_ ";
		}
		document.querySelector('#answer-blanks').innerHTML = workingAnswer;
	}

	lettersGuessed = lettersGuessed + userInput + ",";
	//Display the letters guessed by the user
	document.querySelector('#letters-guessed').innerHTML = lettersGuessed;
	
	//Display the number of attempts remaining
	document.querySelector('#guesses-remain').innerHTML = maxAttempts-attempts;
}

function startGame(){

	// Pick a Pokemon name, randomly
	pokemonName = answers[Math.floor(Math.random() * answers.length)];
	console.log(pokemonName);

	// Display the number of wins
	document.querySelector('#num-wins').innerHTML = wins;

	//Display answer as blanks
	for (var i = 0; i < pokemonName.length; i++){
			workingAnswer = workingAnswer + "_ ";
		}
	document.querySelector('#answer-blanks').innerHTML = workingAnswer;
}

startGame();