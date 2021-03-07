const numbers = {
	0: 'zero',
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine',
  10: 'ten',
  11: 'eleven',
  12: 'twelve',
  13: 'thirteen',
  14: 'fourteen',
  15: 'fifteen',
  16: 'sixteen',
  17: 'seventeen',
  18: 'eighteen',
  19: 'nineteen',
  20: 'twenty',
  30: 'thirty',
  40: 'forty',
  50: 'fifty',
  60: 'sixty',
  70: 'seventy',
  80: 'eighty',
  90: 'ninety',
  100: 'hundred'
}

module.exports = function toReadable(number) {
  let a, b, c, d, e, f;
  
  a = number % 100;
  if (a < 20) {
  	d = (a == 0) ? '' : numbers[a]
  } else {
  	b = number % 10;
    d = (b == 0) ? '' : numbers[b];
    
    c = Math.floor(a / 10)
    d = (c == 0) ? d : numbers[c * 10] + ' ' + d;
  }
  
  e = Math.floor(number / 100);
  f = (e == 0) ? '' : numbers[e] + ' ' + numbers[100];
  
  let result = ((f + d) == '') ? numbers[0] : f + ' ' + d;
  result = (result.substr(-1, 1) == ' ') ? result.slice(0, -1) : result;
  result = (result.substr(0, 1) == ' ') ? result.slice(1, result.length) : result;
  
  
  return result;
}