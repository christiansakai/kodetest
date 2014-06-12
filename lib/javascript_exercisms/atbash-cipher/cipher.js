var atbash = function () {};

atbash.encode = function (str) {
	var keys = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q",
							"r","s","t","u","v","w","x","y","z"],
			words = str.toLowerCase().split(" ");
			encoded = "",
			charsEncoded = 0,
			addSpacingAfterFive = function() {
				if (charsEncoded !== 0 && charsEncoded % 5 === 0) {
				encoded += " ";
			}};

	for (var i = 0; i < words.length; i++ ) {
		var word = words[i];
		for (var j = 0; j < word.length; j++) {
			var curChar = word[j];
			if (curChar.match(/[0-9]/) !== null) {
				encoded += curChar;
				charsEncoded++;
				addSpacingAfterFive();
			} else if (curChar.match(/[,.]/) !== null) {
				encoded += "";
			} else {
			var letterPosition = keys.indexOf(curChar);
			encoded += keys[keys.length - 1 - letterPosition];
			charsEncoded++
			addSpacingAfterFive();
			}
		}
	}
	return encoded.trim();
};