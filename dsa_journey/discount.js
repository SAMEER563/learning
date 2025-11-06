
// Discount Calculation based on Amount


// let amount = Number(prompt("Enter your amount:"));

// if (isNaN(amount)) {
//     console.log("Please enter a valid number");
// }

// else if (amount <= 5000) {
//     console.log("You don't have any discount")

// } else if (amount > 5000 && amount <= 7000) {
//     console.log("You have a 5% discount")
//     console.log((amount*5)/100)
// } else if (amount > 7000 && amount <= 10000) {
//     console.log("You have a 10% discount")
//     console.log((amount*10)/100)
// } else {
//     console.log("Enter a valid Input")
// }

// Discount Calculation With final price payable

let totalamount = Number(prompt("Enter your total  amount:"));

if (isNaN(totalamount)) {
    console.log("Please enter a valid number");
}
else if (totalamount <= 5000) {
    console.log("You don't have any discount")
    console.log("Final amount payable is:", totalamount);
} else if (totalamount > 5000 && totalamount    <= 7000) {
    console.log("You have a 5% discount")
    console.log("Final amount payable is :", totalamount - (5 * totalamount) / 100);
}