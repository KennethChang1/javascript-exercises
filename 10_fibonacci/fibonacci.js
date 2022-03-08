const fibonacci = function(a) {
    let x = 0;
    let y = 1;
    let nextNum = 0;
    if (a < 0) {
        return "OOPS";
    }
    for (let i = 0; i < a; i++) {
        nextNum = x + y;
        x = y;
        y = nextNum;
    }
    return x;
};

// Do not edit below this line
module.exports = fibonacci;
