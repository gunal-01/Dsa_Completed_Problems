class Solution {		
    /**		
    * @param {BigInt} n		
    * @returns {string}		
    */		
    sumOfSeries(n) {		
    let N = BigInt(n);		
    let sum = (N * (N + BigInt(1)) / BigInt(2)) ** BigInt(2);		
    return sum.toString(); // Convert BigInt to string		
    }		
    }		