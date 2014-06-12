var baseNumbers = {
  0 : 'zero',
  1 : 'one',
  2 : 'two',
  3 : 'three',
  4 : 'four',
  5 : 'five',
  6 : 'six',
  7 : 'seven',
  8 : 'eight',
  9 : 'nine',
  10: 'ten',
  11: 'eleven',
  12: 'twelve',
  13: 'thirteen',
  14: 'fourteen',
  15: 'fifteen',
  16: 'sixteen',
  17: 'seventeen',
  18: 'eighteen',
  19: 'nineteen'
};

var tens = {
  20: 'twenty',
  30: 'thirty',
  40: 'forty',
  50: 'fifty',
  60: 'sixty',
  70: 'seventy',
  80: 'eighty',
  90: 'ninety'
};

var bigNumbers = {
	1000: 'thousand',
	1000000: 'million',
	1000000000: 'billion'
};

var bigPart = function (number) {
  var factor, result = '';
  for (var bigNumber = 1000000000; bigNumber >= 1000; bigNumber /= 1000) {
    if (number.number >= bigNumber) {
      factor = Math.floor(number.number/bigNumber);
      result += threeDigits(factor) + ' ' + bigNumbers[bigNumber] + ' ';
      number.number = number.number-(factor*bigNumber);
    }
  }
  return result;
};

var handleTens = function (n) {
  for (var decade = 90; decade >= 20; decade -= 10) {
    if (n >= decade) {
      return tens[decade] + '-' + baseNumbers[n-decade];
    }
  }
};

var twoDigits = function(n) {
  var result;
  if (n < 20) {
    result = baseNumbers[n];
  } else {
    result = handleTens(n);
  }
  return result;
};

var threeDigits = function (n) {
  if (n < 100) {
    return twoDigits(n);
  } else {
    return baseNumbers[Math.floor(n/100)] + ' hundred ' + twoDigits(n%100);
  }
};

var say = function () {};

say.inEnglish = function (n) {
  var result, number = {number: n};
  if (0 <= n && n < 1000000000000) {
    result = bigPart(number);
    result += threeDigits(number.number);
    return result.replace(/.zero/, '');
  } else {
    throw new Error('Number must be between 0 and 999,999,999,999.');
  }
};