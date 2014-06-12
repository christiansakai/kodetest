var Series = function (series) {
	this.digits = series.split('').map(function(el){
		return parseInt(el);
	});
};

Series.prototype.slices = function(num) {
	var digits = this.digits,
			result = [];
	if (num > digits.length) {
		throw new Error('Slice size is too big.');
	}
	for (var i = 0; i < digits.length - num + 1; i++) {
		var temp = [];
		for (var j = 0; j < num; j++) {
			temp.push(digits[i + j]);
		}
		result.push(temp);
	}
	return result;
};

Series.prototype.largestProduct = function(num) {
	var seriesArr = this.slices(num),
			result = 0,
			getProd = function(p, q) {
				return p * q;
			};
	for (var i = 0; i < seriesArr.length; i++) {
		product = seriesArr[i].reduce(getProd, 1 );
		if (product > result) {
			result = product;
		}
	}
	return result;
};