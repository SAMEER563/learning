var removeDuplicates = function(nums) {
    let j = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== nums[i + 1] ) {
            nums[j] = nums[i + 1];
            j++;
        }
    }
    return j;
};
// Complexity Analysis:
// Time Complexity: O(n)
// Space Complexity: O(1)

// Example usage:
const nums = [1,1,2,2,3,4,4,5];
const length = removeDuplicates(nums);
console.log(length); // Output: 5