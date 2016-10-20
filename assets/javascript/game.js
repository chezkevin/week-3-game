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
		if (attempts === maxAttempts){
			alert("Sorry, you are not a Pokemon Master. Try again!");
			attempts = 0;
			lettersGuessed = "";
			startGame();
		}
		attempts = attempts + 1;

		lettersGuessed = lettersGuessed + userInput + ",";
		//Display the letters guessed by the user
		document.querySelector('#letters-guessed').innerHTML = lettersGuessed;
		
		//Display the number of attempts remaining
		attemptsLeft = maxAttempts - attempts;
		document.querySelector('#guesses-remain').innerHTML = attemptsLeft;
		
		// Check if userInput matched any value from the pokemonName
		for (var i = 0; i < pokemonName.length; i++){
			console.log("userInput: " + userInput +
				"    pokemonName letter: " + pokemonName.charAt(i) +
				"    pokemonName: " + pokemonName +
				"    workingAnswer: " + workingAnswer[i]
				);

			if ( userInput === pokemonName.charAt(i) ){
				//console.log( "lettersGuessed.includes(userInput): " + lettersGuessed.includes(userInput) );
				//if ( lettersGuessed.includes(userInput) === false ){
					workingAnswer[i] = userInput;
				//}
			}
			document.querySelector('#answer-blanks').innerHTML = workingAnswer.join('');
		}

		if (workingAnswer.includes("_ ") === false){
			alert("Wow! You're a Pokemon Master!");
			attempts = 0;
			wins = wins + 1;
			lettersGuessed = "";
			startGame();
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

	//Display max attempts
	document.querySelector('#guesses-remain').innerHTML = maxAttempts;
	
	//Display the working answer (initially, in blanks)
	document.querySelector('#answer-blanks').innerHTML = workingAnswer.join('');
}

startGame();