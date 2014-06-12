function accumulate (arr, func) {
	var result = [];
	arr.forEach(function(el){
		result.push(func(el));
	});
	return result;
}

// OR

// function accumulate (arr, func) {
// 	var result = [];
// 	for (var i = 0; i < arr.length; i++) {
// 		result.push(func(arr[i]));
// 	}
// 	return result;
// }