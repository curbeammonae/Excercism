// One of the games on Kojos' website looks like a slot machine that shows two groups of wheels with digits on them. Each group of digits represents a number. For the game mechanics, Kojo needs to know the sum of those two numbers.

// Write a function twoSum that accepts two arrays as parameters. Each array consists of one or more numbers between 0 and 9. The function should interpret each array as a number and return the sum of those two number

function twoSum(array1, array2) {
    return Number(array1.join('')) + Number(array2.join(''))
    }

// Another game on the website is a little quiz called "Lucky Numbers". A user can enter a number and then sees whether the number belongs to some secret sequence or pattern. The sequence or pattern of the "lucky numbers" changes each month and each user only has a limited number of tries to guess it.

// This months' lucky numbers should be numbers that are palindromes. Palindromic numbers remain the same when the digits are reversed.

// Implement the new luckyNumber function that accepts a number as a parameter. The function should return true if the number is a palindrome and false otherwise. The input number will always be a positive inte
function luckyNumber(value) {
    return String(value) === [...String(value)].reverse().join('')
    }