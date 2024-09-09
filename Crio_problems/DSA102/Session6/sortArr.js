/**
 * @param {number} n
 * @param {number[]} nums
 * @return {number[]}
 */
function sortArrayAbsolute(n, nums) {
    //implement this function
    nums.sort((a,b) => Math.abs(a)- Math.abs(b));
    return nums;
}

function main() {
    const n = parseInt(readLine(), 10)
    const nums = readIntArr()
    const result = sortArrayAbsolute(n, nums)
    console.log(result.join(" "))
}