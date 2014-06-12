var Garden = function (plants, students) {
	var gardenObj = {};

	var gardenArr = plants.split('\n').map(function(el) {
			console.log(el.split(''));
		return el.split('');
	});

	students = students ? students.sort() : ["Alice", "Bob", "Charlie", "David", "Eve", "Fred", "Ginny", "Harriet", "Ileana", "Joseph", "Kincaid", "Larry"];

	var parsePlants = function (i, gardenArr){
		var start = i * 2;
		var stop = start + 2;
		var result = [];

		var plantHash = {
			G: "grass",
			C: "clover",
			R: "radishes",
			V: "violets"
		};

		result.push(gardenArr[0].slice(start, stop));
		result.push(gardenArr[1].slice(start, stop));
		result = result.reduce(function(a, b){
			return a.concat(b);
		});

		for (var j = result.length -1; 0 <= j; j--) {
			result[j] = plantHash[result[j]];
		}

		return result;
	};

	students = students ? students.sort() : ["Alice", "Bob", "Charlie", "David", "Eve", "Fred", "Ginny", "Harriet", "Ileana", "Joseph", "Kincaid", "Larry"];

	students.forEach(function(student, i){
		gardenObj[student.toLowerCase()] = parsePlants(i, gardenArr);
	});

	return gardenObj;
};