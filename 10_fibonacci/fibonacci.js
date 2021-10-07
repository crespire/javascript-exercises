const fibonacci = function(number) {
    if (number < 0) return "OOPS"
    arr = [0, 1];
    for (let i = 1; i < +number; i++) {
        arr.push(arr[i] + arr[i-1]);
    }
    return arr[+number];
};

// Do not edit below this line
module.exports = fibonacci;