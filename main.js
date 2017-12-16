//vars for npms and pages
var inquirer = require("inquirer");
var prompt = require("prompt");
var word = require("./words.js");
var letter = ("./letters.js");

//start the prompt
prompt.start();

// the game object
var game = function() { 
	this.words = ["pizza", "wings", "tacos", "borscht", "scampi", "casserole", "zabaglione"]  
	this.guessRemaining = 10;
	this.currentWrd = null;
	this.startGame = function(wrd) {
		var randWord = Math.floor(Math.random() * this.words.length)
		this.currentWrd = new Word(this.words[randWord]);
		this.currentWrd.getLets(); 
		this.userPrompt; 
	};
	//prompt
	this.userPrompt = function(){
		var self = this; 
		prompt.get(["guessLetter"], function(err, result){
			console.log("The letter or space you guessed is " + result.guessLetter);
			var findHowManyOfUserGuess = currentWrd.checkIfLetterFound(result.guessLetter)
			if(findHowManyOfUserGuess === 0){
				console.log("Your guess is WRONG!!");
				self.guessRemaining--;
			}
			else{
				console.log("Your guess was RIGHT!!");
				if(self.currentWrd.didWeFindTheWord() === true){
					console.log("YOU WON!!");
					return 1; //end the game?
				}
				else{
					console.log("Guesses remaining: " + guessRemaining);
					console.log(this.currentWrd.wordRender());
				}
			}
			if(self.guessRemaining > 0 && self.currentWrd.found === false){
				userPrompt;
			}
			else if(self.guessRemaining === 0){
				console.log("Game Over Bro!" + self.currentWrd.word);
			}
			else{
				console.log(self.currentWrd.wordRender()); 
			}
		});
	}
};

game.startGame();

