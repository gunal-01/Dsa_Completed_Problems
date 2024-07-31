/**
 * @param {string} paragraph
 * @return {string}
 */


// TODO: Implement this method
function capitaliseFirstLetter(word) {
    return word[0].toUpperCase() + word.slice(1);
  }
  function capitaliseBasic(paragraph) {
    let arr = paragraph.split(" ");
    let result = "";
    for(let i = 0; i < arr.length; i++) {
      result += capitaliseFirstLetter(arr[i]) + " ";
    }
    return result.trim();
  }