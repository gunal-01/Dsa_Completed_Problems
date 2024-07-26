/**
 * @param {number} n
 * @return {number}
 */

function naturalSum(N) {
    //implement this function
    if(N > 0) {
        return N + naturalSum(N-1)
    } else {
        return N;
    }
}
