

// Rotate an array by one position to the left
// let arr = [1,2,3,4,5]
// let copy = arr[0]
// for(let i=0; i<arr.length-1; i++) {
//     arr[i] = arr[i+1]
// }
//  arr[arr.length-1] = copy
//  console.log(arr)  // Output: [2, 3, 4, 5, 1]





 // Rotate an array by k position to the left
//     let arr = [1,2,3,4,5]
//     let k = 2
//     for(let j=0; j<k; j++) {
//        let copy = arr[0]
//     for(let i=0; i<arr.length-1; i++) {
//     arr[i] = arr[i+1]
// }
//     arr[arr.length-1] = copy
//     }
//     console.log(arr)  // Output: [3, 4, 5, 1, 2]



// Rotate an array by one position to the right
//  let arr = [1,2,3,4,5]
// let copy = arr[arr.length-1]
// for(let i=arr.length-1; i>0; i--) {
//     arr[i] = arr[i-1]
// }
//  arr[0] = copy
//  console.log(arr) // Output: [5, 1, 2, 3, 4]

// Rotate an array by k position to the right
    let arr = [1,2,3,4,5]
    let k = 2
    for(let j=0; j<k; j++) {
       let copy = arr[arr.length-1]
    for(let i=arr.length-1; i>0; i--) {
        arr[i] = arr[i-1]
    }
    arr[0] = copy
    }
    console.log(arr)  // Output: [4, 5, 1, 2, 3]

// Time Complexity: O(n*k)
// Space Complexity: O(1)








