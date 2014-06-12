var Robot = function (){
	var letters = ['X','R','K','Z','L']; // don't know how to do it a better way, too lazy to use whole alphabet
	var generateNums = function() { return Math.floor(Math.random() * 10); };
	var generateLetters = function() { return letters[Math.floor(Math.random() * 5)]; };
	var generateName = function() { return generateLetters() + generateLetters() + generateNums() + generateNums() + generateNums(); };

	this.name = generateName();
};

Robot.prototype.reset = function() {
	var letters = ['X','R','K','Z','L']; // don't know how to do it a better way, too lazy to use whole alphabet
	var generateNums = function() { return Math.floor(Math.random() * 10); };
	var generateLetters = function() { return letters[Math.floor(Math.random() * 5)]; };
	var generateName = function() { return generateLetters() + generateLetters() + generateNums() + generateNums() + generateNums(); };

	this.name = generateName();

	// duplicated logic, don't currr --- it's early.
};
