const findTheOldest = function(peopleObjsArray) {
    let oldestPerson;
    let oldestPersonAge = 0;

    peopleObjsArray.forEach((person) => {
        let birthYear = person.yearOfBirth;
        let deathYear = person.yearOfDeath;
        const currentDate = new Date();

        if (deathYear == undefined) deathYear = currentDate.getFullYear();

        let age = deathYear - birthYear;

        console.log(age);

        if (age > oldestPersonAge) {
            oldestPersonAge = age;
            oldestPerson = person;
        }
    });

    return oldestPerson;
};


// Do not edit below this line
module.exports = findTheOldest;