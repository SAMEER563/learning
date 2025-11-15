// function without parameters

function sum() {
    console.log("Hi there!");
}
sum(); // Output: Hi there!




// function with parameters

function add(a, b) {
    console.log(a + b);
}
add(5, 10); // Output: 15



// function with return value
function multiply(a, b) {
    return a * b;
}
console.log(multiply(5, 10)); // Output: 50


// function expression

const divide = function (a, b) {
    return a / b;
};
console.log(divide(10, 2)); // Output: 5


// arrow function

const subtract = (a, b) => {
    return a - b;
};
console.log(subtract(10, 5)); // Output: 5

// arrow function with implicit return

const square = a => a * a;
console.log(square(5)); // Output: 25


// Create a function using function keyword that takes a string parameter and returns vowel count in the string.

function countVowels(str) {
    let count = 0;
    for (let char of str) {
        if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u' ||
            char === 'A' || char === 'E' || char === 'I' || char === 'O' || char === 'U') {
            count++;
        }
    }
    return count;
}
console.log(countVowels("Hello World")); // Output: 3