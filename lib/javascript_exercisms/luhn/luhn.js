var Luhn = function (num) {
	this.num = num;
	this.numString = "" + num;
	this.checkDigit = parseInt(this.numString[this.numString.length - 1]);
	this.addends = this.addFunc();
	this.checksum = this.addends.reduce(function(x, y){ return x + y;});
	this.valid = this.checksum % 10 === 0;
};

Luhn.create = function (num) {
	num = '' + num + '0';
	var number = new Luhn(num);
	var numString = number.numString;
	var difference = number.checksum % 10;
	var checksum = difference === 0 ? 0 : 10 - difference;

	return parseInt(numString.slice(0, numString.length - 1) + checksum);
};

Luhn.prototype.addFunc = function() {
	var num = this.numString.split('').reverse().join(''),
			results = [];

	for (var i = 0; i < num.length; i++) {
		var curNum = parseInt(num[i]);
		if (i !== 0 && i % 2 !==0 ){
			var newNum = curNum * 2;
			if (newNum > 9) {
				results[i] = (newNum - 9);
			} else {
				results[i] = newNum;
			}
		} else {
			results[i] = curNum;
		}
	}
	return results.reverse();
};