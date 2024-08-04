/**
 * @param {number} N
 * @returns {number}
 */

class Solution {
    // Function to calculate the factorial of a number.
    factorialNumbers(n) {
        // your code here
       let res = [];
       let fact = 1;
       for(let i = 1; fact <= n; i++){
           res.push(fact);
           fact *= i+1;
       }
       return res;

    }
}