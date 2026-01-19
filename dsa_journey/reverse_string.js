// Reverses an array of characters in place
function reverseString(s) {
    let left = 0;
    let right = s.length - 1;
    while (left < right) {
        // Swap characters
        let temp = s[left];
        s[left] = s[right];
        s[right] = temp;
        left++;
        right--;
    }
    return s;
}

// Example usage:
let charArray = ['h', 'e', 'l', 'l', 'o'];
console.log(reverseString(charArray)); // Output: ['o', 'l', 'l', 'e', 'h']