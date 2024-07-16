
// User function Template for javascript

/**
 * @param {number} n
 * @returns {string}
 */

class Solution {
    armstrongNumber(n) {
        // code here
        let num = n;
        const k = String(num).length;
        let sum = 0;
        while (n > 0) {
            const ld = n % 10;
            sum += Math.pow(ld, k);
            n = Math.floor(n/10);
        }
        return sum === num ? true : false;
    }
}

//solved in geekforgeeks
