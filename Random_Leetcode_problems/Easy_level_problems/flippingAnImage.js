/**			
* @param {number[][]} image			
* @return {number[][]}			
*/			
var flipAndInvertImage = function(image) {			
    let arr = image.map(subarray => subarray.reverse());			
    let replacedArray = arr.map(subarray => subarray.map(value => value === 0 ? 1 : 0));			
    return replacedArray;			
    };			