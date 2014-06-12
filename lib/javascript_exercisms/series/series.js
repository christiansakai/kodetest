var Series = function(str){
	this.str = str;
	this.digits = this.getDigits();
};

Series.prototype.getDigits = function() {
	var str = this.str,
			result = [];
	for (var i = str.length - 1; i >= 0; i--) {
		result.push(parseInt(str[i]));
	}
	return result.reverse();
};

Series.prototype.slices = function(num) {
	var digits = this.digits,
			results = [];

	if (num > digits.length) throw "Slice size is too big.";

	for (var i = 0; i < digits.length - num + 1; i++) {
		var temp = [];
		for (var j = 0; j < num ; j++) {
			temp.push(digits[i + j]);
		}
		results.push(temp);
	}
	return results;
};