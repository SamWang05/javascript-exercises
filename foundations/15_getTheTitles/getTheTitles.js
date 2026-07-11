const getTheTitles = function(booksArray) {
    let titlesArray = [];

    booksArray.forEach((book) => {
        titlesArray.push(book.title);
    });

    return titlesArray;
};

// Do not edit below this line
module.exports = getTheTitles;
