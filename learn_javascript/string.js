// What is the output of the following code?

console.log("Hello".toUpperCase());
// Output: "HELLO"

//How do you get the first character of a string?

let str = "JavaScript";
console.log(str.charAt(0));
// Output: "J"

// What will be the result of the following code?

let str1 = "JavaScript";
console.log(str1.slice(0, 4));
// Output: "Java"


// How can you check if a string contains a specific substring (e.g., "world" in "Hello world")?
let str2 = "Hello world";
console.log(str2.includes("world"));
// Output: true

// What is the output of the following code?

let s = "banana";
console.log(s.indexOf("na"));
// Output: 2

// What does this return and why?
"hello" === new String("hello")
// Output: false, because new String() creates a String object, not a primitive string.

