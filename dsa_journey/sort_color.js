var sortColors = function(nums) {
    let i =0, j=0, k= nums.length -1;

    const swap = (arr, a, b) => {
        [arr[a], arr[b]] = [arr[b], arr[a]];
    }

    while(i <= k){
        if(nums[i]==0){
            swap(nums, i, j);
            i++;
            j++;
        } else if(nums[i]==2){
            swap(nums, i, k);
            k--;
        } else {
            i++;
        }
    }
    return sortColors(nums);
};

console.log(sortColors([2,0,2,1,1,0])); // [0,0,1,1,2,2]
console.log(sortColors([2,0,1])); // [0,1,2]