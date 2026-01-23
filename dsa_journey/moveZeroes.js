function moveZeroes(nums) {
  let j = 0; // position for non-zero

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[j] = nums[i];
      j++;
    }
  }

  // fill remaining positions with 0
  while (j < nums.length) {
    nums[j] = 0;
    j++;
  }
}

// Example usage:
const arr = [0, 1, 0, 3, 12];
moveZeroes(arr);
console.log(arr); // Output: [1, 3, 12, 0, 0]