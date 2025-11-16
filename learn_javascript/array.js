// let arr = [];
// arr.push(1);
// arr.push(2);
// arr.push(3);
// arr.push(4);
// arr.push(5);
// console.log(arr); // Output: [1, 2, 3, 4, 5]
// console.log("Length of array:", arr.length); // Output: Length of array: 5


let arr = new Array(5);
let sum = 0;
for (let i = 0; i < arr.length; i++) {
    arr[i] = Number(prompt("Enter number for index "));
    sum = sum + arr[i];
}
console.log("Sum of array elements:", sum); // Output: Sum of array elements: 0