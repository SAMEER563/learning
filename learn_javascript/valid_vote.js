let age = Number(prompt("Enter your age:"));

if (isNaN(age)) {
    console.log("Please enter a valid number for age.");
}
else if (age >= 18){
   console.log("You are valid for vote")
} else {
    console.log("You are not valid for vote")
}
