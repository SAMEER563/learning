// function without parameters

function sum () {
    console.log("Hi there!");
}
sum(); // Output: Hi there!




// function with parameters

function add (a, b) {
    console.log(a + b);
}
add(5, 10); // Output: 15



// function with return value
function multiply (a, b) {
    return a * b;
}  
console.log(multiply(5, 10)); // Output: 50


// function expression

const divide = function (a, b) {
    return a / b;
};
console.log(divide(10, 2)); // Output: 5


