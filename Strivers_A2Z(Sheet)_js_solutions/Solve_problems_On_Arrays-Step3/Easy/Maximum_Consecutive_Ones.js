/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let n = nums.length;
    let count = 0;
    let maxi = 0;
    for(let i = 0; i < n; i++) {
        if(nums[i] === 1){
            count++;
        } else {
            count = 0;
        }
        maxi = Math.max(maxi, count);
    }
    return maxi;
};