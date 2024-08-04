/**
 * @param {number[]} nums
 * @return {number}
 */
var findGCD = function(nums) {
    let value
    let min = Math.min(...nums)
    let max = Math.max(...nums)
for(let i = 1; i <= min; i++) {

    if(max % i === 0 && min % i === 0) {
        value = i;
    }
}
return value;
};