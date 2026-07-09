const removeFromArray = function(array, ...targetArguments) {
    return array.filter(element => !targetArguments.includes(element));
}

// Do not edit below this line
module.exports = removeFromArray;
