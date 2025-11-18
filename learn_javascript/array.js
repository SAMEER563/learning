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

// let arr = [10, 5, 8, 20, 3];
// let max = arr[0];
// for (let i= 0; i<arr.length; i++) {
//     if (max < arr[i]) {
//         max = arr[i];
//     }
// }
// console.log("Maximum number in the array:", max); // Output: Maximum number in the array: 20


// Find min number from given array

// let arr = [10, 5, 8, 20, 3];
// let min = arr[0];
// for (let i = 0; i <arr.length; i++) {
//     if (arr[i] < min) {
//         min = arr[i];
//     }
// }
// console.log("Minimum number in the array:", min); // Output: Minimum number in the array: 3



// Find the second max number from given array

// let arr = [10, 20, 5, 8, 20, 3];
// let max = Math.max(arr[0], arr[1]);
// let sMax = Math.min(arr[0], arr[1]);

// for(let i = 2; i<arr.length; i++) {
//     if(arr[i] > max) {
//         sMax = max;
//         max = arr[i];
//     } else if(arr[i] > sMax && arr[i] != max) {
//         sMax = arr[i];
//     }   
// }

// console.log("Second maximum number in the array:", sMax); // Output: Second maximum number in the array: 10


// Reverse an array with extra array

let arr = [1, 2, 3, 4, 5];
let revArr = new Array(arr.length);
let j = 0;
for (let i = arr.length - 1; i >= 0; i--) {
    revArr[j] = arr[i];
    j++;
}
console.log("Reversed array:", revArr); // Output: Reversed array: [5, 4, 3, 2, 1]