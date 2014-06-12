function toRoman (num) {
  var numerals = ["I", "V", "X", "L", "C", "D", "M"],
      result = [],
      start = 0,
      middle = 1,
      end = 2;

  while (num > 0) {
    var digitsBase = num % 10;
    var tempResult = toRomanHelper(digitsBase, numerals[start], numerals[middle], numerals[end]);
    start += 2;
    middle += 2;
    end += 2;
    result.push(tempResult);
    num = Math.floor(num / 10);
  }

  return result.reverse().join("");
 }

 function toRomanHelper(placeDigit, denomLowText, denomMediumText, denomHighText) {
  var tempResult = "";

  if (placeDigit > 0 && placeDigit <= 3) {
    for (var i = 0; i < placeDigit; i++) {
      tempResult += denomLowText;
    }
  }
  else if (placeDigit === 4) {
    tempResult += denomLowText + denomMediumText;
  }
  else if (placeDigit >= 5 && placeDigit < 9 ) {
    tempResult += denomMediumText;
    for (var i = 5; i < placeDigit; i++) {
      tempResult += denomLowText;
    }
  }
  else if (placeDigit === 9) {
    tempResult += denomLowText + denomHighText;
  }

  return tempResult;
 }
