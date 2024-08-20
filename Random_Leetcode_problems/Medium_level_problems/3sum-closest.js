/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    let closest = Infinity;
    nums = nums.sort((a,b) => a-b);
    for(let i = 0; i < nums.length; i++) {
        let a = i+1, b = nums.length-1;
        while(a<b) {
            let tar = nums[i] + nums[a] + nums[b];
            if(Math.abs(tar - target) < Math.abs(closest - target)) closest = tar;
            (tar < target) ? a++ : b--;
        }
    }
    return closest;
};