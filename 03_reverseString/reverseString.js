const reverseString = function(str) {
    /* let stringArray = str.split('');
    let result = "";
    let i = stringArray.length - 1;

    // Iterate backwards
    for (i; i >= 0; i--) {
        result += stringArray[i];
    }

    return result; */
    return str.split("").reverse().join("");
};

// Do not edit below this line
module.exports = reverseString;
