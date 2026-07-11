const fibonacci = function(index) {
    let acceptedValue = index;

    if (index < 0) return "OOPS";
    if (typeof(acceptedValue) == "string") acceptedValue = parseInt(acceptedValue, 10);

    let firstNum = 1;
    let secondNum = 1;
    let newNum = 0;

    if (acceptedValue == 1 || acceptedValue == 2) return 1;

    for (let i = 3; i <= acceptedValue; i++) {
        newNum = firstNum + secondNum;

        firstNum = secondNum;
        secondNum = newNum;
    }

    return newNum;
};

// Do not edit below this line
module.exports = fibonacci;
