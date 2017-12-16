//letters guessed wtih the actual character or an underscore

var Letter = function(let){
	this.charac = let,
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

module.exports = Letter;