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