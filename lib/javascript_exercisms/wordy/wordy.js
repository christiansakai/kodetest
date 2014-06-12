var WordProblem = function (q) {
	this.q = q;
};

var ArgumentError = function (prob) {
	return prob;
};

WordProblem.prototype.answer = function() {
	var q = this.q;
	var operands = q.match(/([0-9]+)|(-[0-9]+)/g);
	var operations = q.match(/(plus)|(minus)|(multiplied)|(divided)/g);
	var result = 0;
	this.bind = function(prob) {
		throw new ArgumentError(prob);
	};

	if (!!operands) {
		operands = operands.map(function(el){
			return parseInt(el);
		});
	} else {
		this.bind(q);
	}

	if (operations === null) {
		this.bind(q);
	}

	var x = operands[0];

	var doMath = function (a, b, operation) {
		var result = 0;
		if (operation === "plus") {
			result += (a+b);
		} else if (operation === "minus") {
			result += (a-b);
		} else if (operation === "multiplied") {
			result += (a*b);
		} else if (operation === "divided") {
			result += (a/b);
		}
	return result;
	};

	for (var i = 0; i < operations.length; i++) {
		var y = operands[i+1];
		var token = operations[i];
		result = doMath(x, y, token);

		if (operations.length > 1) {

			x = result;
		}
	}
	return result;
};