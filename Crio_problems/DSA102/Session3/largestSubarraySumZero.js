function largestSubarraySumZero(n, arr) {
    let prefixSum = 0;
    let maxLen = 0;
    let endIdx = -1;
    let sumMap = new Map();
    n = arr.length;

    for(let i = 0; i < n; i++) {
        prefixSum += arr[i];

        if(prefixSum === 0) {
            maxLen = i + 1;
            endIdx = i;
        }
        if(sumMap.has(prefixSum)) {
            let prevIdx = sumMap.get(prefixSum);
            let currentLen = i - prevIdx;
            if(currentLen > maxLen) {
                maxLen = currentLen;
                endIdx = i;
            }
        } else {
            sumMap.set(prefixSum, i);
        }
    }
    if(endIdx === -1) {
            return [-1];
        }
    return arr.slice(endIdx - maxLen + 1, endIdx + 1);
}

let n = 5;
let arr = [1,-3,4,0,-1];
console.log(largestSubarraySumZero(n,arr));