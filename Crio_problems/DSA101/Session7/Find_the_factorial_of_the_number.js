/**
 * @param {number} n
 * @return {number}
 */


function factorialDSA(n) {
    //implement this function
    if(n === 0) {
        return 1;
    }
    return n * factorialDSA(n-1);
}
