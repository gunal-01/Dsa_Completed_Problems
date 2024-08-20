/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    const storeInd = [];
    const res = [];
    for(let i = 0; i < nums.length; i++) {
        while(storeInd && nums[storeInd[storeInd.length - 1]] <= nums[i]) {
            storeInd.pop();
        }
        storeInd.push(i);
        if(storeInd[0] === i - k) {
            storeInd.shift();
        }
        if(i >= k - 1) {
            res.push(nums[storeInd[0]]);
        }
    }
    return res;
};