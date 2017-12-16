//object for the current word to be guessed

var letter = require("./letters.js");

var Word = function(wrd){
	this.word = wrd,
	this.lets = [],
	this.found = false,
	this.getLets = function(){
		for(var i = 0; i < word.length; i++){
			// this.lets.push pushes the letter entered into the empty array
			this.lets.push(new Letter(this.word[i]));
		}
	}
	this.checkIfLetterFound = function(guessLetter){
		var whatToReturn = 0;
		for(var i = 0; i < this.lets.length; i++){
			// if the value of lets[i] === the letter the user guessed, set .appear to true, add +1 to whatToReturn
			if (this.lets[i] === guessLetter) {
				this.lets[i].appear = true;
				whatToReturn++;
			}
		}
		return whatToReturn;
	}
	this.didWeFindTheWord = function(){
		// used MND definition of .every()
		if (this.lets.every(function(curLet, index, array){
			return curLet.appear === true;
		})){
			this.found === true;
		}
		return this.found;
	}
	this.wordRender = function(){
		var str = "";
		for(var i = 0; i < this.lets.length; i++) {
			str += this.lets[i].letterRender();
		return str;
		}
	}
}
module.exports = Word;