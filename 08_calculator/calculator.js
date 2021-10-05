const add = function(x=0, y=0) {
	return x + y;
};

const subtract = function(x=0, y=0) {
	return x - y;
};

const sum = function(numbers) {
	return numbers.reduce((prev, curr) => prev + curr, 0);
};

const multiply = function(numbers) {
  return numbers.reduce((prev, curr) => prev * curr);
};

const power = function(int, exp) {
  return int ** exp;
};

const factorial = function(base) {
  let ans = 1;
  if (base === 0) return ans;
  for (let i = 1; i < base+1; i++) {
    ans = ans * i;
  }
  return ans;	
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
