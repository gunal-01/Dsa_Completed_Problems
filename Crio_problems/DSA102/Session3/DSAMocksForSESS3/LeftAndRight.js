/**
 * @param {number[]} arr
 * @return {number[]}
 */

function leftAndRight(nums) {
    //implement this function
    const n = nums.length;
    let totalSum = 0;
    for(let i = 0; i < n; i++) {
        totalSum += nums[i];
    }
    let leftSum = 0;
    const result = new Array(n);

    for(let i = 0; i < n; i++) {
        const rightSum = totalSum - leftSum - nums[i];
        result[i] = Math.abs(leftSum - rightSum);
        leftSum += nums[i];
    }
    return result;
}
