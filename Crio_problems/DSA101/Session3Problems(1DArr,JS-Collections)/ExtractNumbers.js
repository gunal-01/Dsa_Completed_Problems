/** 
 * @param {number} N
 * @param {number[]} arr
 * @return {number[]}
 */
function extractNumbers(N, arr) {
    //implement this function
    let numberList = [];
    for(let i = 0; i < N; i++) {
        if(!isNaN(arr[i]) && !isNaN(parseFloat(arr[i]))) {
            numberList.push(parseInt(arr[i]));
        }
    }
    return numberList;
}