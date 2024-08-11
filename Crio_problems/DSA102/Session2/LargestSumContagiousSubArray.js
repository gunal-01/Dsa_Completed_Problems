/**
 * @param {number} n
 * @param {number[]} arr
 * @return {number}
 */
function contigiousSequence(n, arr) {
    let max = Number.NEGATIVE_INFINITY, max_ending = 0;
    
    for(let i = 0; i < n; i++) {
        max_ending = max_ending + arr[i];
        if(max < max_ending) {
            max = max_ending;
        }
        if(max_ending < 0) {
            max_ending = 0;
        }
    }
    return max;
   }