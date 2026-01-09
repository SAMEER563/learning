// Find the minimum and maximum values in an array

function minMax(arr){
    let min = arr[0];
    let max = arr[0];
    for(i=1; i<arr.length; i++){
        if(arr>max){
            max = arr[i];
        }
        if(arr[i]<min){
            min = arr[i];
        }

    }
    return [min, max];
}