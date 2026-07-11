const palindromes = function (targetString) {
    let cleanedString = targetString.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
    
    let reverseString = cleanedString.split("").reverse().join("");

    if (cleanedString == reverseString) return true;
    else return false;
};

// Do not edit below this line
module.exports = palindromes;
