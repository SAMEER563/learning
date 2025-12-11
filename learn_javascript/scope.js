

// Global scope
let a = 5;
const b = 10;
var c = 15;


// Block scope
if (true) {
    let a = 20;
    const b = 30;
    var c = 40;
}

console.log(a); 
console.log(b); 
console.log(c); 


// Create a function using function keyword that takes two parameters and returns their sum.
function sum(x, y) {
    return x + y;
}
