/**
 * @param {string} text
 * @return {[character, number]}
 */

function mostFrequentDSA(text) {
    //implement this function
    let frequencyMap = new Map();

    for(let char of text) {
        frequencyMap.set(char, (frequencyMap.get(char) || 0) + 1);
    }
    let maxChar = '';
    let maxCount = 0;
    let result;

    for(let [char, count] of frequencyMap) {
        if(count > maxCount || (count === maxCount && char < maxChar)) {
            maxChar = char;
            maxCount = count;
        }
    }
    return [maxChar, maxCount]; 
}