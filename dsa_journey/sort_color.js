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