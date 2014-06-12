function transform (obj) {
	var result = {};

	for (var key in obj) {
		var arrOfLetters = obj[key];
		for (var i = 0; i < arrOfLetters.length; i++) {
			result[arrOfLetters[i].toLowerCase()] = parseInt(key);
		}
	}
	return result;
}
