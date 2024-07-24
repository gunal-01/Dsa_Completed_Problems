/**
 * @param {string} word
 * @return {number}
 */


// TODO: Implement this method
function countVowels(word) {
    let str = word;
    const vowels = new Set(['a', 'e', 'i','o','u']);
    let vowelCount = 0;
    for(const char of str.toLowerCase()) {
      if(vowels.has(char)) {
        vowelCount++;
      }
    }
    return vowelCount;
  }