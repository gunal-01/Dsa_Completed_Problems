/**
 * @param {number} n
 * @param {number[]} arr
 * @return {number[]}
 */
function mergeSort(n, arr) {
    if(n <= 1) {
        return arr;
    }

function mergeSortHelper(arr) {
    //implement this function
    if(arr.length <= 1) return arr;

    const mid = Math.floor(arr.length/2);

    const leftHalf = mergeSortHelper(arr.slice(0, mid));
    const rightHalf = mergeSortHelper(arr.slice(mid));
    return merge(leftHalf, rightHalf);
}

function merge(left, right) {
    let sortedArray = [];
    let i = 0, j = 0;

        while(i < left.length && j < right.length) {
            if(left[i] < right[j]) {
                sortedArray.push(left[i]);
                i++;
            } else {
                sortedArray.push(right[j]);
                j++;
            }
        }
        while(j < right.length) {
            sortedArray.push(right[j]);
            j++;
        }
        return sortedArray;
    }
    return mergeSortHelper(arr);
}