// Character Frequency Count in a String

let s = prompt("Enter a string:");
let arr = new Array(128).fill(0);
// Count frequency
for (let i = 0; i < s.length; i++) {
    let indx = s.charCodeAt(i);
    arr[indx]++;
}
// Print in order of appearance
let printed = new Array(128).fill(false);
for (let i = 0; i < s.length; i++) {
    let indx = s.charCodeAt(i);

    if (!printed[indx]) {
        console.log(s[i] + " - " + arr[indx]);
        printed[indx] = true;
    }
}