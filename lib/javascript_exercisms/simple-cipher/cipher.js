var Cipher = function (key) {
	if (typeof key === "undefined") {
		this.key = 'aaaaaaaaaa';
	} else if (key.match(/^[^a-z]*$/) !== null || key.match(/[0-9]/) !== null ||
		key.match(/[ ]/g)) {
		throw "Bad key";
	} else {
		this.key = key;
	}
};

Cipher.prototype.getAlphabet = function() {
	return ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
};

Cipher.prototype.getIndex = function(str) {
	var alphabet = this.getAlphabet(),
			indexRelativeToAlpha = [];
	for (var i = 0; i < str.length; i++) {
		indexRelativeToAlpha.push(alphabet.indexOf(str[i]));
	}
	return indexRelativeToAlpha;
};

Cipher.prototype.encode = function(str) {
	var alphabet = this.getAlphabet(),
			keyIndex = this.getIndex(this.key),
			strIndex = this.getIndex(str),
			result = "";
	for (var i = 0; i < str.length; i++) {
		var shiftedIndex = keyIndex[i] + strIndex[i];
		if (shiftedIndex > 25) {
			result += alphabet[shiftedIndex - 26];
		} else {
			result += alphabet[shiftedIndex];
		}
	}
	return result;
};

Cipher.prototype.decode = function(str) {
	var alphabet = this.getAlphabet(),
			keyIndex = this.getIndex(this.key),
			strIndex = this.getIndex(str),
			result ="";
	for (var i = 0; i <str.length; i++) {
		result += alphabet[strIndex[i] - keyIndex[i]];
	}
	return result;
};