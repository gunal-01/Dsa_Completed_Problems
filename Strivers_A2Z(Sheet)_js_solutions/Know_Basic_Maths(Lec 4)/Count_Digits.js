
//User function Template for javascript
    /**
     * @param {number} N
     * @returns {boolean}
    */

    class Solution {
 
        evenlyDivides(N)
        {
            //your code here
            let count = 0;
        let originalNum = N;

        while (N > 0) {

            let digit = N % 10;


            if (digit !== 0 && originalNum % digit === 0) {
                count++;
            }


            N = Math.floor(N / 10);
        }

        return count;
        }
    }