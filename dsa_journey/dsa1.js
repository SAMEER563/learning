// Remove duplicates from a sorted array

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