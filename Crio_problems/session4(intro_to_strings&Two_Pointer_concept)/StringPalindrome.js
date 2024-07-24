/**
 * @param {string} s
 * @return {string}
 */

function stringPalindrome(str) {
    //implement this function
    let left = 0;
    let right = str.length - 1;
    while (left < right) {
        if(str[left] !== str[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}