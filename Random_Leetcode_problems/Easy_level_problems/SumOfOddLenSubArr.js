/**
 * @param {number[]} arr
 * @return {number}
 */
var sumOddLengthSubarrays = function(arr) {
    let totalSum = 0, windowSum;
    for(let windowSize = 1; windowSize <= arr.length; windowSize+=2) {
        windowSum = 0;
        for(let i = 0; i < windowSize; i++) {
            windowSum += arr[i];
        }
        totalSum += windowSum;
        for(let i = windowSize; i < arr.length; i++) {
            windowSum += arr[i] - arr[i - windowSize];
            totalSum += windowSum;
        }
    }
    return totalSum;
};


//sliding window Problem