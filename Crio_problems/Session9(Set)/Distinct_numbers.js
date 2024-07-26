/**
 * @param {number} n
 * @param {number[]} nums
 * @return {number}
 */
function distinctNumbersBasic(n,nums) {
    //implement this function
    let s = new Set(nums);
    return s.size;
}