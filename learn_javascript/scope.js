

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

