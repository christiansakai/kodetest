var Hexadecimal = function (hex) {
	this.hex = hex;
};

Hexadecimal.prototype.toDecimal = function() {
	var hex = this.hex.split('').reverse().join('');
	var hashMap = {
		a: 10,
		b: 11,
		c: 12,
		d: 13,
		e: 14,
		f: 15
	};
	var posValue = function(pos) {
		return Math.pow(16, pos);
	};
	var result = 0;

	for (var i = 0; i < hex.length; i++) {
		var symbol = hex[i];
		var symbolNum = parseInt(symbol);
		if (isNaN(symbolNum)) {
			if (typeof hashMap[symbol] === "undefined") {
				return 0;
			} else {
				result += posValue(i) * hashMap[symbol];
			}
		} else {
			result += posValue(i) * symbolNum;
		}
	}
	return result;
};