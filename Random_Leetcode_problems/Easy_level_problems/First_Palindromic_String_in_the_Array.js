/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function(words) {
    for(let i = 0; i < words.length; i++) {
        const rev = words[i].split('').reverse().join('');
        if(words[i] === rev) {
            return words[i];
        }
    }
    return "";
};