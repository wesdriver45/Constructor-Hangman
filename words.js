//object for the current word to be guessed

var Word = function(wrd){
	this.word = wrd,
	this.lets = [],
	this.found = false,
	this.getLets = function(){
		for(var i = 0; i < word.length; i++){
			// pushes the letter entered into the empty array
			this.lets.push(new Letter(this.word[i]));
		}
	}
	this.checkLetter = function(guessLetter){
		var letterReturn = 0;
		for(var i = 0; i < this.lets.length; i++){
			// if the value of lets[i] === the letter the user guessed, set .appear to true, add +1 to letterReturn
			if (this.lets[i] === guessLetter) {
				this.lets[i].appear = true;
				letterReturn++;
			}
		}
		return letterReturn;
	}
	this.checkWord = function(){
		
				var count = 0;
		for (var i = 0; i < this.lets.length; i++) {
			if (this.lets[i].appear) {
				count++;
			}
		}
		if (count === this.lets.length) {
			this.found = true;
		}
		return this.found;

	this.wordRender = function(){
		var str = "";
		for(var i = 0; i < this.lets.length; i++) {
			str += this.lets[i].letterRender();
		return str;
		}
	}
}
module.exports = Word;
var Word = function(wrd){
	this.word = wrd,
	this.lets = [],
	this.found = false,
	this.getLets = function(){
		for(var i = 0; i < word.length; i++){
			this.lets.push(new Letter(this.word[i]));
		}
	}
	this.checkLetter = function(guessLetter){
		var letterReturn = 0;
		for(var i = 0; i < this.lets.length; i++){
			//
			if (this.lets[i] === guessLetter) {
				this.lets[i].appear = true;
				letterReturn++;
			}
		}
		return letterReturn;
	}
	