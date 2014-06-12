var Crypto = function (text) {
	this.text = text.replace(/[#$%^&.?!, ]/g,"").toLowerCase();
};

Crypto.prototype.normalizePlaintext = function() {
	return this.text;
};

Crypto.prototype.size = function() {
	return Math.ceil(Math.sqrt(this.text.length));
};

Crypto.prototype.plaintextSegments = function() {
	var squares = [],
			text = this.text,
			numCharsPerSq = this.size(),
			charsAdded = 0;

	while (charsAdded < text.length) {
		var textToBeAdded = text.slice(charsAdded, charsAdded + numCharsPerSq);
		squares.push(textToBeAdded);
		charsAdded += numCharsPerSq;
	}
	return squares;
};


Crypto.prototype.ciphertext = function() {
	var encodedText = '',
			finalResult = '',
			segments = this.plaintextSegments(),
			numOfJumps = this.size();

	for (var i = 0; i < segments.length; i++) {
		var square = segments[i];
		for (var j = 0; j < square.length; j++) {
			var character = square[j];
			encodedText += character;
		}
	}

	for (var k = 0; k <= numOfJumps; k++) {
		var pointer = k;
		for (var l = 0; l < segments.length; l++) {
			if (finalResult.length === encodedText.length) {
				break;
			} else {
				finalResult += encodedText.slice(pointer, pointer+1);
				pointer += segments.length;
			}
		}
	}
	return finalResult;
};

// Crypto.prototype.normalizeCiphertext = function() {
// 	var text = this.ciphertext(),
// 			size = this.size(),
// 			result = '';
// ?????????????????????????????????????????????????????
// 	return text;
// };