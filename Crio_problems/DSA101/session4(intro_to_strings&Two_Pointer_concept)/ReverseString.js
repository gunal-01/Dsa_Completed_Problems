/** 
 * @param {String} s
 * @return {String}
 */
function reverseString(str) {
    //implement this function
    const array = str.split('');
    let left = 0;
    let right = array.length-1;
    while (left < right) {
        const temp = array[left];
        array[left] = array[right];
        array[right] = temp;
        left++;
        right--;
    }
    return array.join('');
}
function main() {
    let str = readLine();
    let ans = reverseString(str);
    console.log(ans);
}