var inquirer = require("inquirer");
var prompt = require("prompt");
var randomWord = require("./words.js");
var letters = require("./letters.js")



//game function
var game = function(numOfGuesses, guessesleft) {
	this.numOfGuesses = ;
	this.guessesLeft = 10;
	

}

var lettersGuesses = [];
var userGuess = 0;

var askUser = function() {

	if (count < randomWord.length) {
		userGuess ++;
		console.log("Guess again.");
	}

	inquirer.prompt([
		{
			name: "guess",
			type: "input",
			message: "Guess a letter."
		}

	]);
};
