// let arr = [];
// arr.push(1);
// arr.push(2);
// arr.push(3);
// arr.push(4);
// arr.push(5);
// console.log(arr); // Output: [1, 2, 3, 4, 5]
// console.log("Length of array:", arr.length); // Output: Length of array: 5


// let arr = new Array(5);
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//     arr[i] = Number(prompt("Enter number for index "));
//     sum = sum + arr[i];
// }
// console.log("Sum of array elements:", sum); // Output: Sum of array elements: 0


// Find max number from array

let arr = [10, 5, 8, 20, 3];
let max = arr[0];
for (let i= 0; i<arr.length; i++) {
    if (max < arr[i]) {
        max = arr[i];
    }
}
console.log("Maximum number in the array:", max); // Output: Maximum number in the array: 20


// Find min number from given array

// let arr = [10, 5, 8, 20, 3];
// let min = arr[0];
// for (let i = 0; i <arr.length; i++) {
//     if (arr[i] < min) {
//         min = arr[i];
//     }
// }
// console.log("Minimum number in the array:", min); // Output: Minimum number in the array: 3



