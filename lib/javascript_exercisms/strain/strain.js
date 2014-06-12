var strain = function () {

};

strain.keep = function (arr, func) {
	if (arr.length === 0) {
			return [];
		}
		var result = [];
		for (var i = 0; i < arr.length; i++) {
			var el = arr[i];
			if (func(el)) {
				result.push(el);
			}
		}
		return result;
};

strain.discard = function (arr, func) {
	if (arr.length === 0) {
		return [];
	}
	var result = [];
	for (var i = 0; i < arr.length; i++) {
		var el = arr[i];
		if (!func(el)) {
			result.push(el);
		}
	}
	return result;
};