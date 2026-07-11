const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(arrayNums) {
  let sum = 0;

	for (let i = 0; i < arrayNums.length; i++) {
    sum = sum + arrayNums[i];
  }

  return sum;
};

const multiply = function(arrayNums) {
  let product = 1;

  if (arrayNums.length == 0) return 0;

	for (let i = 0; i < arrayNums.length; i++) {
    product = product * arrayNums[i];
  }

  return product;
};

const power = function(base, exponent) {
	return base ** exponent;
};

const factorial = function(num) {
	let factorialResult = 1;

  if (num == 0) return 1;

  for (let i = num; i > 0; i--) {
    factorialResult = factorialResult * i;
  }

  return factorialResult;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
