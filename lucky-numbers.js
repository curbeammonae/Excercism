// One of the games on Kojos' website looks like a slot machine that shows two groups of wheels with digits on them. Each group of digits represents a number. For the game mechanics, Kojo needs to know the sum of those two numbers.

// Write a function twoSum that accepts two arrays as parameters. Each array consists of one or more numbers between 0 and 9. The function should interpret each array as a number and return the sum of those two number

function twoSum(array1, array2) {
    return Number(array1.join('')) + Number(array2.join(''))
    }