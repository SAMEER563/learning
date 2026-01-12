// Find the minimum and maximum values in an array

function minMax(arr){
    let min = arr[0];
    let max = arr[0];
    for(i=1; i<arr.length; i++){
        if(arr[i]>max){
            max = arr[i];
        }
        if(arr[i]<min){
            min = arr[i];
        }

    }
    return [min, max];
}

console.log(minMax([3,5,1,8,2])); // [1, 8]
console.log(minMax([-10,0,5,3,-2])); // [-10, 5]
