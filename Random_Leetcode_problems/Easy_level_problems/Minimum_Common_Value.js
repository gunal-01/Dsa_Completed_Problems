/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var getCommon = function(nums1, nums2) {
    let num1 = 0, num2 = 0;
    while(num1< nums1.length && num2 < nums2.length) {
        if(nums1[num1] === nums2[num2])
            return nums1[num1];
        if(nums1[num1] > nums2[num2]) {
            num2++;
        } else {
            num1++;
        }
    }
    return -1;
};