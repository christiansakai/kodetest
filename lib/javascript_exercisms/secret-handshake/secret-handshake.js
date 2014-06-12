var SecretHandshake = function (num) {
	if (typeof num !== "number") {
		throw "Handshake must be a number";
	}
	this.num = num;
};

SecretHandshake.prototype.commands = function() {
	var decimal = this.num,
			result = [];
	if (decimal > 16) {
		decimal -= 16;
		makeShake(decimal);
		return result;
	} else {
		makeShake(decimal);
		return result.reverse();
	}
	function makeShake (num) {
		while (num - 8 >= 0) {
			result.push('jump');
			num -= 8;
		}
		while (num - 4 >= 0) {
			result.push('close your eyes');
			num -= 4;
		}
		while (num - 2 >= 0) {
			result.push('double blink');
			num -= 2;
		}
		while (num - 1 >= 0) {
			result.push('wink');
			num -= 1;
		}
	}
};