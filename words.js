//object for the current word to be guessed
var letter = ("./letters.js");

var Word = function(wrd){
	this.word = wrd,
	this.lets = [],
	this.found = false,
	this.getLets = function(){
		for(var i = 0; i < this.word.length; i++){
			// pushes the letter entered into the empty array
			this.lets.push(new letter(this.word[i]));
		}
	}
}

	//letter guess
	this.checkLetter = function(guessLetter){
		var letterReturn = 0;
		for(var i = 0; i < this.lets.length; i++){
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
	//should turn word to string
	this.wordRender = function(){
		var str = "";
		for(var i = 0; i < this.lets.length; i++) {
			str += this.lets[i].letterRender();
		return str;
		}
	}
}
	
	var Word = function(wrd){
		this.word = wrd,
		this.lets = [],
		this.found = false,
		this.getLets = function(){
			for(var i = 0; i < this.word.length; i++){
				this.lets.push(new letter(this.word[i]));
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
	}

	module.exports = Word;