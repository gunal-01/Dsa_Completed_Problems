/**
 * @param {number} n
 * @param {number[]} arr
 * @param {number} target_sum
 * @return {boolean}
 */
function twoSumInSortedArray(n, arr, target_sum) {
    let left= 0, right = arr.length-1;
    let target = target_sum;

    while (left < right) {
        const sum = arr[left] + arr[right];
        if(sum === target) {
            return [left, right];
        } else if(sum < target) {
            left++;
        } else {
            right--;
        }
    }
    return null;
}