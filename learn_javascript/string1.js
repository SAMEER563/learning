// Declaration of string 

// let str = "Hello Ram"
// let str1 = 'Hi Shyam'
// let str2 = `Looking good`

// Access other string in a string 

// let str4 = 10
// let str5 = `You will get ${str4} in each subject`
// console.log(str5)

// Change string into capital letter

// console.log(str.toUpperCase())

// Change string into lower case 

// console.log(str1.toLowerCase())

// Find the substring index

// let str = `Rahul is bad Boy and bad friend`
// console.log(str.indexOf('bad'))

// // Find last substring index
// console.log(str.lastIndexOf('bad'))

// // Slice method 
// console.log(str.slice(0,8))
// console.log(str.slice(-4, -1))

// // Find substring 
// console.log(str.substring(0,4))  //Same as slice method but in this we dont use negative value

// Uses of replace method 

// let  str = "Ramesh looks handsome"
// console.log(str.replace('Ram', 'Mah'))  // It replace only first sentence

// // Uses of replaceAll
// console.log(str.replaceAll('o', 'i'))  // It replace all character which i want to replace


// Use of trim - Trim is use to remove whitespace from starting and ending of string 
 let user = "  Hari  "
 console.log(user.trim());
 console.log(user.trimEnd());  // It remove last spaces
 console.log(user.trimStart());  // It removes first spaces

 // Use of split - Split is basically use to seperate the given value and give in array form 

 let names = "Ramesh, Shyam, Rohan, Jay"
 console.log(names.split(","))