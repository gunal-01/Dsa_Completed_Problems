/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function(arr) {
    let n = arr.length;
    for(let i = 0; i< n; i++){
        for(let j = 0; j < n; j++) {
            if(i != j && arr[i] == 2 * arr[j]) {
                    return true;
            }
        }
    }
    return false;
};