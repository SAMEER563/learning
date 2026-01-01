var maxSubArray = function(nums) {
    let max = -Infinity;
    let sum = 0;

    for(let i =0; i<nums.length; i++){
        sum  += nums[i];
        max = Math.max(max, sum);
        if(sum < 0) sum = 0;
    }

    return max;
};  


// Second Method

function maxSubArray2(arr) {
    let currentElement = arr[0];
    let maxElement = arr[0];
    for(let i = 1; i < arr.length; i++) {
        currentElement = Math.max(arr[i], currentElement + arr[i]);
        maxElement = Math.max(maxElement, currentElement);
    }
    return maxElement;
}

