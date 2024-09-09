/**
 * @param {number} n
 * @param {number[]} arr
 * @return {number}
 */
function firstMissingPositive(n, arr) {
    //implement this function
    n = arr.length;
    let present = new Array(n+1);
    for(let i = 0; i < n+1; i++) {
        present[i] = false;
    }
    for(let i=0; i < n; i++) {
        if(arr[i] > 0 && arr[i] <= n) {
            present [arr[i]] = true;
        }
    }
    for(let i = 1; i <= n; i++) {
        if(!present[i]) {
            return i;
        }
    }
    return n+1;
}