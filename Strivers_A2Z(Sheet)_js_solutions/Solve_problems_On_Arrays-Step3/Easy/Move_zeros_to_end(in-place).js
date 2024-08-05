/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let jlow = 0;
    let bastu = 0;
    while(bastu < nums.length) {
        if(nums[bastu] !== 0) {
            nums[jlow] = nums[bastu];
            jlow++;
        }
        bastu++;
    }
    for(let i = jlow; i < nums.length; i++) nums[i] = 0;
};