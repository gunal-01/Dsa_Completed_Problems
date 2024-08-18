/**
 * @param {number} N
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
function maximumSubarraySumSizeK(N,A,K) {
    let left = 0;
    let right = K-1;
    let currentSum = 0;
    for(let i = left; i <= right; i++) {
        currentSum += A[i];
    }
    let maxSum = currentSum;

    while(right <= N-2) {
        left++;
        right++;
        currentSum = currentSum + A[right] - A[left-1];
        if(maxSum < currentSum) {
            maxSum = currentSum;
        }
    }
    return maxSum;
}