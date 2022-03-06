const sumAll = function(a, b) {
    let c = 0;

    if(a < 0 || b < 0 || typeof a !== "number" || typeof b !== "number") {
        return "ERROR";
    } else if(b > a && a >= 0) {
        for(let i = 0; i < b; i++){
            c += a;
            a++;
        }
    } else if(a > b && b >= 0) {
        for(let i = 0; i < a; i++){
            c += b;
            b++;
        }
    } 
    return c;

};

// Do not edit below this line
module.exports = sumAll;
