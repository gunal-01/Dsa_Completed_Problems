function partition(arr, left, right) {
    let pivot = arr[right];
    let i = left - 1;

    for(let j = left; j<= right-1; j++) {
        if(arr[j]<pivot) {
            i++;
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }
    [arr[right], arr[i+1]] = [arr[i+1], arr[right]];
    return i+1;
}

function quickSortImpl(arr, left, right) {
    if(left >= right) {
        return;
    }
    let pi = partition(arr, left, right);
    quickSortImpl(arr, left, pi-1);
    quickSortImpl(arr, pi+1, right);
}


/**
 * @param {number} n
 * @param {number[]} arr
 * @return {number[]}
 */
function quickSort(n, arr) {
    // implement this function
    quickSortImpl(arr, 0, n-1)
    return arr;
}

function main() {
    let n = parseInt(readLine(), 10);
    let arr = readIntArr();
    let result = quickSort(n, arr);
    console.log(...result);
}