var Triangle = function (uno,dos,tres) {
	this.arrayOfSides = [uno, dos, tres];
};

Triangle.prototype.kind = function() {
	var arrayOfSides = this.arrayOfSides,
			max = Math.max.apply(null, arrayOfSides),
			uno = arrayOfSides[0],
			dos = arrayOfSides[1],
			tres = arrayOfSides[2],
			sameSize = 0,
			sumTwoGreater = function (one, two, three) { return one + two > three; };

	if (sumTwoGreater(uno, dos, tres) && sumTwoGreater(uno, tres, dos) && sumTwoGreater(dos, tres, uno)) {
		for (var i = 0; i < arrayOfSides.length; i++) {
			if (arrayOfSides[i] === max) {
				sameSize++;
			}
		}
		if (sameSize === 2) {
			return 'isosceles';
		} else if (sameSize === 3) {
			return 'equilateral'
		} else {
			return 'scalene';
		}
	} else {
		return "illegal";
	}
};



