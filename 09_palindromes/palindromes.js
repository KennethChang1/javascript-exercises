const palindromes = function (a) {
    let str = a.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "").toLowerCase();
    str = str.replace(/\s/g, '');
    let split = str.split("");
    let reverse = split.reverse();
    let join = reverse.join("");
    if (str === join) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
