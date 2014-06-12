var Raindrops = function () {};

Raindrops.prototype.convert = function(num) {
	var result = '';
	if (num % 3 === 0) {
		result += "Pling";
	}
	if (num % 5 === 0) {
		result += "Plang";
	}
	if (num % 7 === 0) {
		result += "Plong";
	}
	if (!result) {
		result += num;
	}
	return result;
};