var Triplet = function (a, b, c) {
	this.a = a;
	this.b = b;
	this.c = c;
};

Triplet.prototype.sum = function() {
	var a = this.a, b = this.b, c = this.c;
	return a + b + c;
};

Triplet.prototype.product = function() {
	var a = this.a, b = this.b, c = this.c;
	return a * b * c;
};

Triplet.prototype.isPythagorean = function() {
	var a = this.a, b = this.b, c = this.c;
	return Math.pow(a, 2) + Math.pow(b, 2) === Math.pow(c, 2);
};

Triplet.prototype.isValid = function(sum) {
	return this.isPythagorean() && (!sum || sum === this.sum());
};

Triplet.where = function (options) {
	var triplet,
			max = options.maxFactor,
			min = options && options.minFactor || 1,
			sum = options && options.sum || undefined;
			result = [];

	for (var a = min; a < max; a++) {
		for (var b = a+1; b < max; b++) {
			for (var c = b+1; c <=max; c++) {
				triplet = new Triplet (a, b, c);
				if (triplet.isValid(sum)) {
					result.push(triplet);
				}
			}
		}
	}
	return result;
};