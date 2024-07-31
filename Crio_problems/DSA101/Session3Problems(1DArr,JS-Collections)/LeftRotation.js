/** 
 * @param {number[]} arr
 * @return {number[]}
 */
function leftRotation(arr) {
    //implement this function
    let removedElement = arr.shift();
    arr.push(removedElement);
    return arr;
}