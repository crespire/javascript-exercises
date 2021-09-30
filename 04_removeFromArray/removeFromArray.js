const removeFromArray = function(arr, ...filteredArgs) {
    const filterArray = Array.from(filteredArgs);
    let resultArr = new Array();

    arr.forEach(function(element) {
        if (!filterArray.includes(element)) {
            return resultArr.push(element);
        }
    });

    return resultArr;
};

// Do not edit below this line
module.exports = removeFromArray;
