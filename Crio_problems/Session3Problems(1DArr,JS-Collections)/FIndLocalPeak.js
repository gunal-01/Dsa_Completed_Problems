/** 
 * @param {number} N
 * @param {number[]} arr
 * @return {number[]}
 */
function findLocalPeak(N, arr) {
    //implement this function
    let peaks = [];
    for(let i = 0; i <= N-1; i++) {
            let left = (i==0)?-Infinity:arr[i-1];
            let right = (i==N-1)?-Infinity:arr[i+1];
            if(arr[i]>left && arr[i]>right) {
                peaks.push(arr[i]);
            }
    } 
    return peaks;   
}
