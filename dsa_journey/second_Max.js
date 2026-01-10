// Function to find the second largest number in an array

function findSecondLargest(arr) {
  let largest = -Infinity;
  let secondLargest = -Infinity;

  for (let num of arr) {
    if (num > largest) {
      secondLargest = largest;
      largest = num;
    } else if (num > secondLargest && num < largest) {
      secondLargest = num;
    }
  }

  return secondLargest;
}

console.log(findSecondLargest([3, 5, 2, 9, 7])); // 7
console.log(findSecondLargest([10, 20, 20, 30, 40])); // 30