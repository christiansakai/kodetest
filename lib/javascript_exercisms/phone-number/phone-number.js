var PhoneNumber = function (num) {
	this.num = num.replace(/[()-.]/g, "").replace(/\s/g,'');
	// clearly, I'm bad at RegEx
};

PhoneNumber.prototype.number = function() {
	var num = this.num,
			badNum = '0000000000';
	if (num.length === 10) {
		return num;
	} else if (num.length === 11) {
		if (num[0] === '1') {
			num = num.slice(1);
			return num;
		} else {
			return badNum;
		}
	} else {
		return badNum;
	}
};

PhoneNumber.prototype.areaCode = function() {
	return this.num.slice(0, 3);
};

PhoneNumber.prototype.toString = function() {
	return '(' + this.areaCode() + ') ' + this.num.slice(3, 6) + '-' + this.num.slice(6);
};
