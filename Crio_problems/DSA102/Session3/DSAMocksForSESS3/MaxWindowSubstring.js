/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
function minimumWindowSubstring(s, t) {
    //implement this function
    if(s.length === 0 || t.length === 0) return "";

    const tFrequency = {};
    for(const char of t) {
        tFrequency[char] = (tFrequency[char] || 0) +1;
    }

    let left = 0, right = 0;
    let formed = 0;
    const windowFrequency = {};
    let minLength = Infinity, minLeft = 0;
    
    const required = Object.keys(tFrequency).length;
    while(right < s.length) {
        const char = s[right];
        windowFrequency[char] = (windowFrequency[char] || 0) + 1;

        if(tFrequency[char] && windowFrequency[char] === tFrequency[char]) {
            formed++;
        }
        while(left <= right && formed === required) {
            const currentWindowLength = right - left + 1;
            if(currentWindowLength < minLength) {
                minLength = currentWindowLength;
                minLeft = left;
            }
            const leftChar = s[left];
            windowFrequency[leftChar]--;
            if(tFrequency[leftChar] && windowFrequency[leftChar] < tFrequency[leftChar]) {
                formed--;
            }
            left++;
        }
        right++;
    }
    return minLength === Infinity ? "" : s.substring(minLeft, minLeft + minLength);
}