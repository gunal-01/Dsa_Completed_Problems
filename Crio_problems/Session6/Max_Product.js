/**
 * @param {number} n
 * @param {number[]} nums
 * @return {number}
 */
function maxProduct2(n,nums) {
    //implement this function
    n = nums.length;
    let firstMax = 0;
    let secondMax = 0;
    for(let n of nums) {
        if(n > firstMax) {
            [secondMax, firstMax] =[firstMax, n];
        } else {
            secondMax = Math.max(secondMax, n);
        }
    }
    return (firstMax - 1) * (secondMax -1);
}