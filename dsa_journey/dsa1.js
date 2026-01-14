// Remove duplicates from a sorted array - LeetCode 26

    var removeDuplicates = function(nums) {
        let j = 1;
        for (let i = 0; i < nums.length-1; i++) {
            if (nums[i] !== nums[j]) {
                nums[j + 1] = nums[i];
                j++;
            }
        }
        return j;
    }

    // Example usage:
    const nums = [1, 1, 2];
    const k = removeDuplicates(nums);
    console.log(k); // Output: 2
    