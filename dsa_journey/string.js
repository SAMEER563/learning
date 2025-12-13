// Print  each character of the string in a new line

let str = "Hello";

for(let i= 0; i<str.length; i++) {
    console.log(str[i]);
}


// Reverse a string

let str1 = "SAMEER";
let rev = "";
for(let i = str1.length - 1; i >= 0; i--) {
    rev = rev + str1.charAt(i);
}
console.log(rev);

// Reverse a string by second method

let str2 = "JAVASCRIPT";
console.log(str2.split("").reverse().join(""))

// Check if a string is palindrome or not by first method

let str3 = "MADAM";
let revStr3 = "";
for(let i = str3.length - 1; i >= 0; i--) {
    revStr3 = revStr3 + str3.charAt(i);
}
if(str3 === revStr3) {
    console.log(`${str3} is a palindrome`);
} else {
    console.log(`${str3} is not a palindrome`);
}