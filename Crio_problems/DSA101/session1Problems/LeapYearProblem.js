/**
 * @param {number} N
 * @return {boolean}
 */

function leapYearDSA(N) {
    // Implement this function
    if(N%400 === 0 || (N%4 === 0 && N%100!==0)) {
        return true;
    } else {
        return false;
    }
}