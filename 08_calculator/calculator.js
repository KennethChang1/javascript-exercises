const add = function(a, b) {
    return a + b;
};

const subtract = function(a, b) {
    return a - b;
};

const sum = function(array) {
  let total = 0;
  for(let i = 0; i < array.length; i++) {
    total += array[i];
  }
  return total;
};

const multiply = function(array) {
  let total = 1;
  for(let i = 0; i < array.length; i++) {
    total *= array[i];
  }
  return total;
};

const power = function(a, b) {
  return a ** b;
};

const factorial = function(a) {
  let total = 1;
  if(a === 0 || a === 1) {
    return 1;
  } else {
    for(let i = 1; i <= a; i++) {
      total *= i;
    }
  }
  return total;
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
