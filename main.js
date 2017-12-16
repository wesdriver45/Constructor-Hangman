//vars for npms and pages
var inquirer = require("inquirer");
var prompt = require("prompt");
var word = require("./words.js");
var letter = ("./letters.js");

//start the prompt
prompt.start();

// create the game object with keys inside
var game = function() { 
	this.words = ["pizza", "wings", "tacos", "borscht", "scampi", "casserole", "zabaglione"]  
	this.guessRemaining = 10;
	this.currentWrd = null;
	