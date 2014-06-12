var Allergies = function (score) {
	this.score = score;
};

Allergies.prototype.list = function() {
	var result = [],
			sum = 0,
			score = this.score,
			lookup = ["eggs", "peanuts", "shellfish", "strawberries", "tomatoes", "chocolate", "pollen", "cats"],
			TwoToExp = function (exp) { return Math.pow(2, exp); };

	if (score > 255) {
		score = score % 256; // I hate you
	}

	for (var i = 7; i >= 0; i--) {
		var currentVal = TwoToExp(i);

		if (score - currentVal >= 0) {
			score -= currentVal;

			result.push(lookup[i]);
		}
	}

	return result.reverse(); // damn test
};

Allergies.prototype.allergicTo = function(allergen) {
	var killers = this.list();

	for (var i = 0; i < killers.length; i++) {
		if (killers[i] === allergen) {
			return true
		}
	}
	return false;
};
