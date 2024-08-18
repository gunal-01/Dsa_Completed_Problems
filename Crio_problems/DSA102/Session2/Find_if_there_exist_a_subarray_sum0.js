/**
 * @param {number} n
 * @param {number[]} arr
 * @return {string}
 */
function subarraySumZero(n, arr) {
    const prefixSum = new Set();
    let sum = 0;

    for(let i =0; i < n; i++) {
      sum += arr[i];
      if(sum === 0 || prefixSum.has(sum)) {
        return "Yes";
      } else {
        prefixSum.add(sum);
      }
    }
    return "No";
}