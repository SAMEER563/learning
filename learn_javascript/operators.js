// Operators and Conditions

// Operators is a symbol that performs an operation on one or more operands. An operand is a variable or a value on which we perform the operation.

// Arithmetic Operators

// +	Addition

// let a = 5;
// let b = 10;
// console.log(a + b);  //15

// -	Subtraction
// let c = 15;
// let d = 10;
// console.log(c - d) //5

// *	Multiplication
// let e = 5;
// let f = 10;
// console.log(e * f) //50

// /	Division
// let g = 15;
// let h = 3;
// console.log(g / h) //5

// %	Modulus
// let i = 15;
// let j = 2;
// console.log(i % j) //1

// ++	Increment
// let k = 5;
// k++;
// console.log(k) //6

// --	Decrement
// let l = 5;
// l--;
// console.log(l) //4



// Assignment Operators

// =	Assign
// let m = 5;
// console.log(m) //5

// +=	Add and assign
// let n = 5;
// n += 5;
// console.log(n) //10

// -=	Subtract and assign
// let o = 5;
// o -= 3;
// console.log(o) //2

// *=	Multiply and assign
// let p = 5;
// p *= 5;
// console.log(p) //25

// /=	Divide and assign
// let q = 15;
// q /= 3;
// console.log(q) //5

// %=	Modulus and assign
// let r = 15;
// r %= 2;
// console.log(r) //1





// Comparison Operators

// ==	Equal to
// let s = 5;
// let t = 5;
// console.log(s == t) //true

// ===	Equal value and equal type
// let u = 5;
// let v = "5";
// console.log(u === v) //false

// !=	Not equal
// let w = 5;
// let x = 10;
// console.log(w != x) //true

// !==	Not equal value or not equal type
// let y = 5;
// let z = "5";
// console.log(y !== z) //true

// >	Greater than
// let a = 5;
// let b = 10;
// console.log(a > b) //false

// <	Less than
// let c = 5;
// let d = 10;
// console.log(c < d) //true

// >=	Greater than or equal to
// let e = 5;
// let f = 5;
// console.log(e >= f) //true

// <=	Less than or equal to
// let g = 5;
// let h = 10;
// console.log(g <= h) //true


// a + b = 15  or a =+ b    // both are same
// a - b = 5   or a -= b    // both are same
// a * b = 50  or a *= b    // both are same
// a / b = 5   or a /= b    // both are same
// a % b = 1   or a %= b    // both are same





// Logical Operators

// &&	Logical and

let i = 5;
let j = 10;
console.log(i > 3 && j < 20) //true      in this case if both conditions are true then only it will return true otherwise false

// ||	Logical or

let k = 5;
let l = 10;
console.log(k > 3 || l < 5) //true    in this case if any one condition is true then it will return true otherwise false

// !	Logical not

let m = 5;
let n = 10;
console.log(!(m > 3 && n < 20)) //false  in this case if condition is true then it will return false otherwise true


// The falsy values are:

// false
// 0
// -0
// 0n
// ""
// null
// undefined
// NaN

// The truthy values are:

// true
// 42
// "0"
// "false"
// -42
// 42n
// "42"
// "true"
// {}
// []
// function() { }




// Conditional (Ternary) Operator

// condition ? expr1 : expr2

let o = 5;
let p = 10;
let result = o > p ? "Greater" : "Smaller";
console.log(result) //Smaller



// Bitwise Operators

// &	Bitwise AND

let q = 5;
let r = 10;
console.log(q & r) //0

// |	Bitwise OR

let s = 5;
let t = 10;
console.log(s | t) //15

// ~	Bitwise NOT

let u = 5;
console.log(~u) //-6

// ^	Bitwise XOR

let v = 5;
let w = 10;
console.log(v ^ w) //15

// <<	Left shift      ( Its multiply by 2)

let x = 5 << 1;     // 5*2 = 10

console.log(x) //10     

// >>	Right shift     ( Its divide by 2)

let z = 6 >> 1;      // 6/2 = 3
console.log(z ) //3

// >>>	Zero fill right shift


let ab = 5;
let ac = 1;
console.log(ab >>> ac) //2



let a = '1.2';
let b = 1.2;

console.log(a === b); // true
console.log(a == b); // true