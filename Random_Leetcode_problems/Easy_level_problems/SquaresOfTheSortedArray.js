/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let n = nums.length;
    let arr = new Array(n);
    for(let i = 0; i < n;i++){
        arr[i] = Math.pow(nums[i], 2);
    }
    arr.sort((a,b) => a-b);
    return arr;
};