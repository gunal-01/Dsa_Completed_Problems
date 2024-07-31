/** 
 * @param {String} s
 * @return {String}
 */
function reverseCharacters(s) {
    //implement this function
    return s.split(' ').map(word => word.split('').reverse().join('')).join(' ');
}