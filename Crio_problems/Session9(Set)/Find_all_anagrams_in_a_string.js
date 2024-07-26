/**
 * @param {string} str
 * @param {number[]} arr
 * @return {number}
 */
function findAllAnagrams(str, arr) {
    // implemet this function
    function sortString(str) {
        return str.split('').sort().join('');
    }
    let sortedS = sortString(str);
    let anagrams = [];

    for(let a of arr) {
        if(sortString(a) == sortedS) {
            anagrams.push(a);
        }
    }
    anagrams.sort();
    return anagrams;
}