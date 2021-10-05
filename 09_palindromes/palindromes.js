const palindromes = function (word) {
    let arrWord = Array.from(word).join();
    let revWord = Array.from(word).reverse().join();

    let regex = /[\W_]/g;
    strippedWord = arrWord.toLowerCase().replace(regex, '');
    strippedRev = revWord.toLowerCase().replace(regex, '');

    return strippedWord === strippedRev;
};

// Do not edit below this line
module.exports = palindromes;
