/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function(arr) {
    let n = arr.length;
        let h = new Array(n);
        let j = 0;
        for(let i = 0; i < n; i++) {
        if(arr[i] === 0) {
        if (j < n) h[j++] = 0;
        if (j < n) h[j++] = 0;
        }
        else {
        if (j < n) h[j++] = arr[i];
        }
        }
        for(let i = 0; i < n; i++) {
        arr[i] = h[i];
        }
};