// Given a year, report if it is a leap year.
// The tricky thing here is that a leap year in the Gregorian calendar occurs:

const isLeap = (year) => {
    return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
    };