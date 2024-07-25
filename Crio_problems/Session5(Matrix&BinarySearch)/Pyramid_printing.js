/**
 * @param {number} n
 * @return {string[]}
 */


// TODO: Implement this method
//Note:-It is mandatory to return the array in the below function. Printing the answer in console won't work
function patternPrintingI(n) {
    let result = []
    for(let i = 0; i < n; i++){
        let row = '';
        for(let j=0; j<= i; j++) {
            row += '* ';
        }
        result.push(row.trim());
    }
    return result;
}