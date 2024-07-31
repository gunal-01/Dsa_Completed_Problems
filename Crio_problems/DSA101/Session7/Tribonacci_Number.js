/**
 * @param {number} n
 * @return {number}
 */
function tribonacci(n) {
    //implement this function
    if(n === 0) {
        return 0;
    }
    if(n === 1) {
      return 1;  
    } 
    if(n === 2) {
      return 1;  
    } 
    let tribo1 = tribonacci(n-3), tribo2 = tribonacci(n-2), tribo3 = tribonacci(n-1);
    let res = tribo1 + tribo2  + tribo3;
    return res;
}