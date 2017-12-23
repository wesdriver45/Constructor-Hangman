var words = ["random", "words", "hangman", "constructor", "game"];

//function to choose a random word
var wordPicker = function(randomWord) {
	this.randomWord = (Math.floor(Math.random() * words.length));
	return randomWord;
	};

	console.log(randomWord);


module.exports = randomWord;
