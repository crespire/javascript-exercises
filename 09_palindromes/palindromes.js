const palindromes = function (word) {
    let regex = /[\W_]/g;
    strippedWord = word.toLowerCase().replace(regex, '');

    return strippedWord.split('').reverse().join('') === strippedWord;
};

// Do not edit below this line
module.exports = palindromes;
