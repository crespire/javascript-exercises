const ftoc = function(temp) {
  let result = ((temp - 32) * 5/9).toFixed(1);
  return Number(result);
};

const ctof = function(temp) {
  let result = (temp * 9/5 + 32).toFixed(1);
  return Number(result);
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
