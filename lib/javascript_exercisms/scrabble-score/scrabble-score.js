function score (word) {
	var pointValues = { 1:['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
											2:['D', 'G'],
											3:['B','C','M', 'P'],
											4:['F', 'H', 'V', 'W', 'Y'],
											5:['K'],
											8:['J', 'X'],
											10:['Q','Z'] };
	var value = 0;

	if (!word) {
		return 0;
	}

	word = word.toUpperCase();


	for (var i = 0; i < word.length; i++) {
		var letterFromWord = word[i];
		for (var point in pointValues) {
			for (var j = 0; j < pointValues[point].length; j++) {
				var letterFromHash = pointValues[point][j];
				if (letterFromWord === letterFromHash ) {
					value += parseInt(point);
				}
			}
		}
	}

	return value;
}
