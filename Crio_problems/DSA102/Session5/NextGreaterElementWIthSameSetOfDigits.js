/**
 * @param {number} n
 * @return {number}
 */
function nextGreaterElementWithSameSetOfDigits(n) {
    //implement this function
    let digits = n.toString().split('').map(Number);
    let length = digits.length;
    let i = length - 2;
    while(i >= 0 && digits[i] >= digits[i + 1]) {
        i--;
    }
    if(i < 0) {
        return -1;
    }
    let j = length -1;
    while(j > i && digits[j] <= digits[i]) {
        j--;
    }

    [digits[i], digits[j]] = [digits[j], digits[i]];

    let left = i + 1;
    let right = length - 1;
    while(left < right) {
        [digits[left], digits[right]] = [digits[right], digits[left]];
        left++;
        right--;
    }

    let result = parseInt(digits.join(''), 10);

    return result <= 2 ** 31 - 1 ? result : -1;
}