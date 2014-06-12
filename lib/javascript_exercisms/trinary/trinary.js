var Trinary = function (val) {
	this.val = val;
};

Trinary.prototype.toDecimal = function() {
	var val = this.val.split('').reverse(),
			result = 0,
			valueOfPlace = function (place) { return Math.pow(3, place); };

	for (var i = 0; i < val.length; i++) {
		var currentPlace = parseInt(val[i]);

		if (isNaN(currentPlace)) {
			return 0;
		}

		if (currentPlace !== 0) {
			result += valueOfPlace(i) * currentPlace;
		}
	}
	return result;
};