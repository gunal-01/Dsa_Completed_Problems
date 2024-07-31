/**
 * @param {number[]} arr
 * @return {number}
 */
function findSingleNumber(arr) {
    let map = new Map();
    for(let i = 0; i < arr.length; i++) {
        if(!map.has(arr[i])) {
            map.set(arr[i], 1);
        } else {
            map.set(arr[i], map.get(arr[i])+1);
        }
    }
    for(let[key, val] of map) {
        if(val == 1) {
            return key;
        }
    }
}