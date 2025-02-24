// 1) Write a function named calculateDifference that takes two arguments and returns the difference between the first and second argument.
function calculateDifference (a, b) {
    return a - b;
}

// 2) Write a function named isOdd that takes one argument and returns true if the number is odd, and false if it is not.
function isOdd (num) {
    return num % 2 !== 0;
}

// 3) Write a function named findMin that takes an array of numbers and returns the smallest number in the array.
function findMin (arr) {
    return Math.min(...arr)
}

// 4) Write a function named filterEvenNumbers that takes an array of numbers and returns a new array containing only the even numbers.
function filterEvenNumbers (arr) {
    return arr.filter(num => num % 2 === 0)
}

// 5) Write a function named sortArrayDescending that takes an array of numbers and returns a new array sorted in descending order.
function sortArrayDescending(arr) {
    return arr.slice().sort((a, b) => b - a);
}

// 6) Write a function named lowercaseFirstLetter that takes a string and returns the same string with the first letter lowercased.
function lowercaseFirstLetter(str) {
    return str.charAt(0).toLowerCase() + str.slice(1);
}

// 7) Write a function named countVowels that takes a string and returns the number of vowels (a, e, i, o, u, A, E, I, O, U) in the string. It should filter vowels from the string.
function countVowels(str) {
    const vowels = "aeiouAEIOU";
    let count = 0;
    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}

// 8) Write a function named findAverage that takes an array of numbers and returns the average of all elements.
function findAverage(arr) {
    return arr.reduce((sum, num) => sum + num, 0) / arr.length;
}



