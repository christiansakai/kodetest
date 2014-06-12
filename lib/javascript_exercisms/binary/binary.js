var Binary = function (input) {
	this.bin = input;
};

Binary.prototype.toDecimal = function() {
	var input = this.bin.split('').reverse(),
			result = 0,
			valueOfPlace = function (place) { return Math.pow(2, place); };

	for (var i = 0; i < input.length; i++) {
		var currentPlace = input[i];
		if (currentPlace === '1') {
			result += valueOfPlace(i);
		}
	}

	return result;
};
