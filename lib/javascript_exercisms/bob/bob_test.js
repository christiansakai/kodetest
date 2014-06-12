var Bob = function(){};

Bob.prototype.hey = function(str) {
	if (!!str.match(/[0-9]+$/g)) {
		return "Whatever.";
	} else if (!!str.match(/[0-9]+[?]$/g)) {
		return "Sure.";
	} else if (str.trim() === "") {
		return "Fine. Be that way!";
	} else if (str === str.toUpperCase()) {
		return "Woah, chill out!";
	} else if (!!str.match(/.*[?]$/g)) {
		return "Sure.";
	} else if (str === '') {
		return "Fine. Be that way!";
	} else {
		return "Whatever.";
	}
};