/**
 * @param {number} N
 * @param {number[]} arr
 * @return {string}
 */
function maxRepeatingWord(N, arr) {
    //implement this function
    arr = arr.sort();
    let map = new Map();
    for(let i = 0; i < arr.length; i++) {
        if(!map.has(arr[i])) {
            map.set(arr[i], 1);
        } else {
            map.set(arr[i], map.get(arr[i])+1);
        }
    }
    let maxVal = 0;
    let maxKey = "";
    for(let[key, val] of map) {
        if(val > maxVal) {
        maxVal = val;
        maxKey = key;
        }
    }
    return maxKey;
}