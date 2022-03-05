const reverseString = function(string) {
    let splitString = string.split("");
    let reverse = splitString.reverse();
    let join = reverse.join("");
    return join;
};

// Do not edit below this line
module.exports = reverseString;
