//vars for npms and pages
var inquirer = require("inquirer");
var prompt = require("prompt");
var word = require("./words.js");


//start the prompt
prompt.start();

// the game object
function game() { 
	this.words = ["pizza", "wings", "tacos", "borscht", "scampi", "casserole", "zabaglione"]  
	this.guessLeft = 10;
	this.currentWrd = null;
	this.startGame = function(wrd) {
		var randWord = Math.floor(Math.random() * this.words.length)
		this.currentWrd = new Word(this.words[randWord]);
		this.currentWrd.getLets(); 
		this.userPrompt(); 
	};
	//prompt
	this.userPrompt = function(){
		var self = this; 
		prompt.get(["guessLetter"], function(err, result){
			console.log("The letter you guessed is " + result.guessLetter);
			var numberGuesses = currentWrd.checkLetter(result.guessLetter)
			if(numberGuesses === 0){
				console.log("Your guess is WRONG!!");
				self.guessLeft--;
			}
			else{
				console.log("Your guess was rigth!");
				if(self.currentWrd.checkWord() === true){
					console.log("YOU won!");
					return 1; 
				}
				else{
					console.log("Guesses left: " + guessLeft);
					console.log(this.currentWrd.wordRender());
				}
			}
			if(self.guessLeft > 0 && self.currentWrd.found === false){
				userPrompt;
			}
			else if(self.guessLeft === 0){
				console.log("Game Over!" + self.currentWrd.word);
			}
			else{
				console.log(self.currentWrd.wordRender()); 
			}
		});
	}
};

game.startGame();

