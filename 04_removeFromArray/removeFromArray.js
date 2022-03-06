const removeFromArray = function(array, ...num) {
    array = array.filter(val => !num.includes(val));
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
