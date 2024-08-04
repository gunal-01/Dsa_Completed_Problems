/**
 * @param {number} n
 * @param {number[]} nums
 * @return {number}
 */
function maxSumTriplet(n, nums) {
    let ans = 0;
    for(let j = 1; j<=n-2;j++) {
        let second_ele = nums[j];

        let first_ele = 0;
        for(let i = 0; i <j; i++) {
            if(nums[i] < second_ele)
                first_ele = Math.max(first_ele, nums[i]);
        }
        let third_ele = 0;
        for(let k=j+1; k<n;k++) {
            if(nums[k]>second_ele)
                third_ele = Math.max(third_ele, nums[k]);
        }
        if(first_ele!=0 && third_ele!=0) {
            ans = Math.max(ans, first_ele+second_ele+third_ele);
        }
    }
    return ans;
}