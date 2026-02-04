// Get date and time
let date = new Date();
console.log(date)  // It returns ITC date and time 
console.log(date.toString()) // It returns IST time 
console.log(date.toDateString())  // It returns only date
console.log(date.toISOString())   // It returns UTC time
console.log(date.toLocaleString()) // It returns string date and time 
console.log(date.toLocaleDateString())  // It returns string date 


// Get everythings into single format

console.log(date.getDate())
console.log(date.getDay())
console.log(date.getMonth())  // It start indexing from 0 
console.log(date.getFullYear())
console.log(date.getHours())
console.log(date.getMinutes())








