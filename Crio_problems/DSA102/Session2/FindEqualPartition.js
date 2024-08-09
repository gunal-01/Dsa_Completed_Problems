/**
 * @param {number} n
 * @param {number[]} arr
 * @return {number}
 */
function equalPartition(n, arr) {
    let prefixSum = new Array(n);
    for(let i = 0; i < n; i++) {
        if(i == 0) {
            prefixSum[i] = arr[i];
        } else {
            prefixSum[i] = arr[i] + prefixSum[i-1];
        }
    }
    let suffixSum = new Array(n);
    for(let i = n-1; i>=0; i--) {
        if(i ==n-1) {
            suffixSum[i] = arr[i];
        } else {
            suffixSum[i] = arr[i] + suffixSum[i+1];
        }
    }
    for(let i = 1;i <n-1;i++) {
        if(prefixSum[i-1] == suffixSum[i+1])
        return i;
    }
    return -1;
}