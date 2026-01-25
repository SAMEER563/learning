// Reverse string in JavaScript

let str = "Hello, World!";

let reversedStr = str.split("").map(word=>word.split("").reverse().join("")).join("");
console.log(reversedStr); // Output: !dlroW ,olleH