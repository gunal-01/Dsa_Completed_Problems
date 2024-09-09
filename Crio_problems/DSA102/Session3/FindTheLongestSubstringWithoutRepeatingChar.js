/**
 * @param {string} s
 * @return {number}
 */
function longestSubstringWithoutRepeatingCharacter(s) {
    let n = s.length;
    let maxLen = 0;
    let start = 0;
    let charIndex = new Map();

    for(let end = 0; end < n; end++) {
        if(charIndex.has(s[end])) {
            start = Math.max(charIndex.get(s[end]) + 1, start);
        }
        charIndex.set(s[end], end);
        maxLen = Math.max(maxLen, end - start + 1);
    }
    return maxLen;
}