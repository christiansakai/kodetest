var Sieve = function(max) {
	this.max = max;
	function getPrimes (rangeMax) {
		var arr = [];
		for (var i = 2; i <= rangeMax; i++) {
			arr.push(i);
		}
		for (var j = 0; j < arr.length; j++) {
			var curNum = arr[j];
			var maxMultiplier = Math.ceil(arr[arr.length - 1] / curNum);
			for (var k = 2; k <= maxMultiplier; k++) {
				var curMultiple = k * curNum;
				var indexCurMultiple = arr.indexOf(curMultiple);
				if (indexCurMultiple > -1) {
					arr.splice(indexCurMultiple, 1);
				}
			}
		}
		return arr;
	}
	this.primes = getPrimes(this.max);
};