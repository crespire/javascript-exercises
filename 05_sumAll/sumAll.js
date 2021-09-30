const sumAll = function(firstInput, secondInput) {
    let result = 0;

    if (typeof(firstInput) !== typeof(0) || typeof(secondInput) !== typeof(0)) {
        return 'ERROR';
    } else if (firstInput < 0 || secondInput < 0) {
        return 'ERROR';
    }

    let start = (firstInput < secondInput) ? firstInput : secondInput;
    let end = (firstInput < secondInput) ? secondInput : firstInput;
    let i = start;

    do {
        result += i;
        i++;
    } while (i<=end)
    
    return result;
};

// Do not edit below this line
module.exports = sumAll;
