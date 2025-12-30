
// Reverse a String
function revString (str) {
    return str.split("").reverse().join("")

}
 
console.log(revString("SAMEER"))

// Sum of Array Elements
let arr = [1,2,3,4,4,5,6,6]
let sum = 0;
for (let i=0; i<arr.length; i++) {
    sum = sum + arr[i]
}
  
console.log(sum)


function isPalindrome(str) {
    let left = 0, right = str.length-1;
    while(left < right ) {
      if (str[left] !== str[right])
        return false;
        left ++;
        right --;
      
    }
    return true
}

console.log(isPalindrome("mdjs"))


function removeDuplicates(arr){
    return [...new Set(arr)];
}

console.log(removeDuplicates([1,75,4,5,7,5,4,7]))


function countDigit(num){
 return num.toString().length;
}
console.log(countDigit(578469))