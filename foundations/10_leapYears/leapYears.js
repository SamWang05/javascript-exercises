const leapYears = function(yearProvided) {
    if (yearProvided % 4 != 0) {
        return false;
    }
    if (yearProvided % 100 != 0 || yearProvided % 400 == 0) {
        return true;
    }
    else {
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;
