var primeFactors = function () {};

primeFactors.for = function (num) {
	var result = [];
	if (num <= 1) {
		return result;
	}
	for (var i = 2; i <= num; i++) {
		var factor = i;
		if (num % factor === 0) {
			var newNum = num / factor;
			var recursiveResult = this.for(newNum);
			result.push(factor);
			if (recursiveResult.length > 0) {
				result = result.concat(recursiveResult);
				return result;
			}
		}
	}
	return result;
};