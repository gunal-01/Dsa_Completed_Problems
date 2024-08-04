//User function Template for javascript
/**
 * @param {number} N
 * @returns {number}
*/

class Solution {
    //Function to find sum of divisors
    sumOfDivisors(N)
    {
        //your code here
        let sum = 0;
        for(let i = 1; i <= N; i++) {
            sum += Math.floor(N/i)*i;
        }
        return sum;
    }
}