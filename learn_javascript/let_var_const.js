console.log("Hello, World!");

// let a = 5;
// console.log(a);

// let ram = "Lord"
// ram = "Rama"
// console.log(ram);

// const b = 10;
// console.log(b);

// b = 20;
// console.log(b);      // Error: Assignment to constant variable.




// Swapping values using third variable

// let a = 5;
// let b= 10;
// let c;

// c=a;
// a=b;
// b=c; 
// console.log("a:", a);
// console.log("b:", b);


// Swapping values without using third variable


// let a = 5;
// let b = 10;

// a= a +b;
// b= a -b;
// a= a-b;

// console.log("a:", a);
// console.log("b:", b);


// Swapping values using destructuring assignment

// let a= 5;
// let  b= 10;

// [a,b] = [b,a];
// console.log("a:", a);
// console.log("b:", b);


// Take value from user input

// let name = prompt("Enter your name ")
// console.log( name);


//What will be the output of the following code?

// console.log(a);  // Output: undefined
// var a = 10;
// console.log(b); // Output: ReferenceError: Cannot access 'b' before initialization
// let b = 20;


// What will be the output of the following code?

for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1000);
} 
// Output: 3 3 3

// What will be the output of the following code?

for (let j = 0; j < 3; j++) {
  setTimeout(() => console.log(j), 1000);
}

// Output: 0 1 2


// What will be the output of the following code?

if (true) {
  var x = 10;
  let y = 20;
  const z = 30;
}

console.log(x);
console.log(y);
console.log(z);

// Output:
// 10
// ReferenceError: y is not defined
// ReferenceError: z is not defined


// What will be the output of the following code?

console.log(a);
var a = 5;

console.log(b);
let b = 10;

b = 15;
console.log(b);

// Output:
// undefined
// ReferenceError: Cannot access 'b' before initialization
// 15


// What will be the output of the following code?

var x = 1;
let y = 2;

{
  var x = 10;
  let y = 20;
  console.log(x, y);  // Output: 10 20
}

console.log(x, y);  // Output: 10 2


// What will be the output of the following code?

function demo() {
  console.log(a);  // Output: undefined
  console.log(b);  // Output: ReferenceError: Cannot access 'b' before initialization
  var a = 10;
  let b = 20;
}
demo();


// What will be the output of the following code?

let a = 10;
{
  let a = 20;
  {
    let a = 30;
    console.log(a);  // Output: 30
  }
  console.log(a);  // Output: 20
}
console.log(a);  // Output: 10


// What will be the output of the following code?

function test() {
  if (true) {
    var a = 10;
    let b = 20;
    const c = 30;
  }
  console.log(typeof a); // Output: number
  console.log(typeof b); // Output: undefined
  console.log(typeof c); // Output: undefined
}
test();


// What will be the output of the following code?

function tricky() {
  console.log(a);  // Output: undefined
  console.log(b);  // Output: ReferenceError: b is not defined
  var a = b = 10;
}
tricky();

console.log(typeof a);  // Output: undefined
console.log(typeof b);  // Output: number

