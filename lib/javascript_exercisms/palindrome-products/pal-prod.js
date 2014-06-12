function Palindromes(options) {

  this.maxFactor = options.maxFactor;
  this.minFactor = options.minFactor || 1;

  this.generate = function() {
    var minFactor = this.minFactor;
    var maxFactor = this.maxFactor;

    var palindromes = [];
    var palindromeIndexes = [];

    for (var i = minFactor; i <= maxFactor; i++) {
      for (var j = minFactor; j <= maxFactor; j++) {

        var result = i * j;
        if ( ! this.isPalindrome(result) ) {
         continue;
       	}

        var factors = [i,j].sort();

        if (typeof palindromes[result] === "undefined") {
          palindromes[result] = [];
          palindromeIndexes.push(result);
        }

        if ( ! containsArr(palindromes[result],factors) ) {
          palindromes[result].push(factors);
        }
      }
    }

    this.palindromes = palindromes;
    this.palindromeIndexes = palindromeIndexes;
  };

  this.largest = function() {
    var largestPalindrome = Math.max.apply(null,this.palindromeIndexes);
    var factors = this.palindromes[largestPalindrome];
    return { value: largestPalindrome, factors: factors };
  };

  this.smallest = function() {
    var smallestPalindrome = Math.min.apply(null,this.palindromeIndexes);
    var factors = this.palindromes[smallestPalindrome];
    return { value: smallestPalindrome, factors: factors };
  };

  this.isPalindrome = function(number) {
    var numberAsString = number.toString();
    var reversedString = numberAsString.split("").reverse().join("");
    return (numberAsString === reversedString);
  };
}

function containsArr(arr,el) {
  var contains = false;

  for (var i = 0; i < arr.length; i++) {
    if (arr[i].join() === el.join()) {
      contains = true;
    }
  }

  return contains;
}