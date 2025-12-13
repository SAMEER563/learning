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