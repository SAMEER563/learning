// 1. Log your name and hobby in console 
console.log("Name - Sam" + " , " + "Hobby - Time Pass")

// 2. Perform and log the result of 45 * 2 -10
let a = 45;
let b = 2;
let c = 10;

console.log((a*b)-c)

// 3. Use console to display current year
const now = new Date;
console.log(now.getFullYear())

// 4. Create two variable for first and last name and concatinate them.
let fName = "Sam"
let lName = "Rockstar"

console.log(fName + " " + lName)

// 5. Track the value of variable by loggong it before and after updating.
let one = 1
console.log(one)

one = 2
console.log(one)

// 6. Use console.error() to simulate an error message.
console.error("Something went wrong")

// 7. Log the square of the number 12 to the console.
let sq = 12
console.log(sq * sq)

// 8. Print the type of the variable that holding the value true
let ab = true;
console.log(typeof ab)

// 9. Create a variable that holding your age and log whether it's greater than 18
let age = 26;
if(age>18){
    console.log(age)
} else {
    console.log("Age is less than 18")
}

// 10. Log the result of 100 / 0 and observed the output
console.log(100/0)