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

// Check if a string is palindrome or not by second method

let str4 = "JAVASCRIPT";
let revStr4 = "";
revStr4 = str4.split("").reverse().join("");
if(str4 === revStr4) {
    console.log(`${str4} is a palindrome`);
} else {
    console.log(`${str4} is not a palindrome`);
}

// Check if a string is palindrome or not by third method

let str5 = "LEVEL";
let isPalindrome = true;
let i=0; j= str5.length - 1;
while(i < j) {
    if(str5.charAt(i) !== str5.charAt(j)) {
        isPalindrome = false;
        break;
    }
    i++;
    j--;

}
if(isPalindrome) {
    console.log(`${str5} is a palindrome`);
} else {
    console.log(`${str5} is not a palindrome`);
}

// Count number of characters in a string
let str6 = "HELLO WORLD";
let count = 0;
for(let i = 0; i < str6.length; i++) {
    count++;
}
console.log(`Number of characters in "${str6}" is ${count}`);