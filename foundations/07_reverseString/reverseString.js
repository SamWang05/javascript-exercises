const reverseString = function(string) {
    let stringLength = string.length;
    let newString = ''

    for (let i = stringLength - 1; i >= 0; i--) {
        newString = newString + string[i]
    }

    return newString;
};

// Do not edit below this line
module.exports = reverseString;
