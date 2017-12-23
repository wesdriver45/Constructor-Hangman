var inquirer = require("inquirer");
var prompt = require("prompt");
var randomWord = require("./words.js");
var letters = require("./letters.js")



//game function
var game = function(gameWord,  numOfGuesses, guessesleft) {
	this.gameWord = randomWord;
	this.numOfGuesses = "";
	this.guessesLeft = 10;

	this.wordLength = function () {
		
	};

	
	this.guesses = function() {
		if (this.numOfGuesses <= this.guessesLeft) {
			guessesLeft --;
			console.log("You have " + this.guessesLeft + ".");
		}
	};
	
	this.addletters = function() {

	};
	

}
//vars for prompt
var lettersGuesses = [];
var userGuess = 0;
//
var askUser = function() {

	if (userGuess < gameWord.length && userGuess < guessesLeft) {
		userGuess ++;
		console.log("Guess again.");
	}
	else {
		guessesLeft--
	}

	inquirer.prompt([
		{
			name: "guess",
			type: "input",
			message: "Guess a letter."
		}

	]).then(function(answers) {
		var newLetter = new letters(answers.guess);
		lettersGuesses.push(newLetter);
	});
};
