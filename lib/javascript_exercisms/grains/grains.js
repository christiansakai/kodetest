var Grains = function () {
};

Grains.prototype.square = function(num) {
	var grains = 0;
	if (num === 1) {
		grains = 1;
	} else {
		grains = this.square(num-1) * 2;
	}
	return grains;
};

Grains.prototype.total = function() {
	var result = 0;

	for (var i = 64; i >= 1; i--) {
		result += this.square(i);
	}
	return result;
};
