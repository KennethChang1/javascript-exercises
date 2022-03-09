const findTheOldest = function(a) {
    const getAge = function(born, death) {
        if (!death) {
            death = new Date().getFullYear();
        }
        return death - born;
    }

    const old = a.reduce((oldest, currentValue) => {
        const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
        const currentAge = getAge(currentValue.yearOfBirth, currentValue.yearOfDeath);
        if (oldestAge > currentAge) {
            return oldest;
        } else {
            return currentValue;
        }
    })

    return old;
};

// Do not edit below this line
module.exports = findTheOldest;
