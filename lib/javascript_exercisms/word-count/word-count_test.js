function words (str) {
	var wordsArr = str.match(/(\w|[é]|Привет)+/g);
	var result = {};

	wordsArr = wordsArr.map(function(el){
		return el.toLowerCase();
	});

	for (var i = 0; i < wordsArr.length; i++) {
		var word = wordsArr[i];

		if (!!result[word]) {
			result[word] ++;
		} else {
			result[word] = 1;
		}
	}
	return result;
}