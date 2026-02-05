// // Declare array 

// let arr = [12, 50, "Ram", true]
// console.log(arr)

// // Push operation - Add new element at the end of array
// arr.push("Shalu");
// console.log(arr);

// // Pop operation - Remove last element from the array
// arr.pop();
// console.log(arr)

// // Unshift method - Use to add new element at starting 
// arr.unshift("sam")
// console.log(arr)

// // Shift method - Use to remove first element 
// arr.shift();
// console.log(arr)

// Use iteration to print one by one 

// let arr1 = [10,52,45,75,56]

// for(i=0; i<arr1.length; i++){
//     console.log(arr1[i])
// }

// Use for of loop

// for(let nums of arr1){
//     console.log(nums)
// }


// We cannot overwrite the array by using const
// const arr = [10,52,45,75,56];

// arr = [10,75,33,]
// console.log(arr)

// We can overwrite the array by using var and let 
// let arr = [10,52,45,75,56];

// arr = [10,75,33,]
// console.log(arr)

// Uses of slice - It give the value which I required by using index but it does not make changes into original array

// let arr = [10,52,45,75,56];
// console.log(arr.slice(1,3))
// console.log(arr)

// Uses of splice - It give the value which I required by using index but it make changes into original array

let arr = [10,52,45,75,56];
console.log(arr.splice(1,3))
console.log(arr)