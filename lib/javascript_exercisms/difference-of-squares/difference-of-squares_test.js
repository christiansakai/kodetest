var Squares = function (max) {
	this.max = max;
	this.squareOfSums = this.getSquareOfSums();
	this.sumOfSquares = this.getSumOfSquares();
	this.difference = this.squareOfSums - this.sumOfSquares;
};

Squares.prototype.makeSquare = function(num) {
	return Math.pow(num, 2);
};

Squares.prototype.getSquareOfSums = function() {
	var max = this.max,
			results = [];
	for (var i = max; 0 <= i; i--) {
		results.push(i);
	}
	return this.makeSquare(results.reduce(function(a,b){ return a + b; }));
};

Squares.prototype.getSumOfSquares = function() {
	var max = this.max,
				squares = [];
		for (var i = max; 0 < i; i--) {
			squares.push(this.makeSquare(i));
		}
		return squares.reduce(function(a, b) { return a + b; }, 0);
};