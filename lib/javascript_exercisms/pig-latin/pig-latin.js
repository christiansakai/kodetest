var pigLatin = function () {
};

pigLatin.translate = function (str) {

	var vowelStart = function (word) {
		var vowels = ["a","e","i","o","u"];
		return vowels.indexOf(word[0]) > -1 ? true : false;
	};

	var consonantStart = function (word) {
		var first = word[0];
		var second = word[1];
		var third = word[2];
		if ((vowelStart(first) === false && vowelStart(second) === false && vowelStart(third) === false) ||
		(second === "q" && third === "u")){
			var movedPart = first + second + third;
			var otherPart = word.slice(3);
			return otherPart + movedPart + "ay";
		} else if ((vowelStart(first) === false && vowelStart(second) === false) || (first === "q" && second === "u")){
			var movedPart = first + second;
			var otherPart = word.slice(2);
			return otherPart + movedPart + "ay";
		} else {
			return word.slice(1) + first + "ay";
		}
	};

	var words = str.split(" ");
	var results = [];

	for (var i = 0; i < words.length; i++){
		if (vowelStart(words[i]) === true){
			words[i] = words[i] + "ay";
		} else {
			words[i] = consonantStart(words[i]);
		}
	}
	return words.join(" ");
}