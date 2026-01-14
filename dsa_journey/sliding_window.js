// Longest substring without repeating characters

function lengthOfLongestSubstring(s) {
    let set = new Set();
    let left = 0;
    let maxLength = 0;

    for(let right=0; right<s.length; right++) {
        while(set.has(s[right])) {
            set.delete(s[left]);
            left++;
        }
        set.add(s[right]);
        maxLength = Math.max(maxLength, right - left + 1);
    }
    return maxLength;
}

// Another approach using a map to store the last seen index of characters

function lengthOfLongestSubstringMap(s) {
    let map = new Map();
    let left = 0;
    let maxLength = 0;
    for(let right=0; right<s.length; right++) {
        if(map.has(s[right])) {
            left = Math.max(map.get(s[right]) + 1, left);
        }
        map.set(s[right], right);
        maxLength = Math.max(maxLength, right - left + 1);
    }
    return maxLength;
}



