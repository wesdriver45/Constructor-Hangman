//letters guessed wtih the actual character or an underscore

var letter = function(let){
	this.character = let,
	this.appear = false,
	this.letterRender = function(){
		if(this.appear === false){
			return "_";
		}
		else {
			return charac;
		}
	}
}

module.exports = letter;