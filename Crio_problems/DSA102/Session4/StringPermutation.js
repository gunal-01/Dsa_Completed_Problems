/**
 * @param {number} n
 * @param {string} s
 * @param {number[]} arr
 * @return {string}
 */


// TODO: Implement this method
function stringPermutation(n, s, arr) {
    let values = s.split("");
    let combined = arr.map((index, i) => ({index: index, value: values[i]}));
    combined.sort((a,b) => a.index - b.index);
    let resultString = combined.map(item => item.value).join('');
    return resultString;
}