var prime = function () {

};

prime.nth = function (nth) {
	if (nth === 0) {
		throw new Error("Prime is not possible");
	}

 var primes = [2];
 var n = 3;
 var divisor;
 var i;
 var limit;
 var isPrime;
	while(primes.length<nth){
	  divisor = 3;
	  i = 1;
	  limit = Math.sqrt(n)+1;
	  isPrime = true;
	  while(divisor<limit){
	    if(n % divisor === 0){
	        isPrime = false;
	        divisor = limit;
	    }
	    else divisor = primes[i++] || divisor+ 2;
		}
	  if (isPrime) {
	  	primes.push(n);
	  }
	  n += 2;
	}
	return primes[primes.length-1];
};