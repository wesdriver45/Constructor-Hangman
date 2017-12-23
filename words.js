var letters = require("./letters.js");

var words = ["random", "words", "hangman", "constructor", "game"];

//function to choose a random word
var wordPicker = function() {
	var randomWord = (Math.floor(Math.random() * words.length));
	return randomWord;
}



module.exports = randomWord;
