/**
 * @param {number[]} arr
 * @param {number} N
 * @param {number} P
*/

class Solution {
    frequencyCount(arr,n,P){
       //code here
        for(let i = 0; i < n; i++) {
            if(arr[i] > n) {
                arr[i] = 0
            }
        }
        for(let i = 0; i < n; i++) {
            if(arr[i] % (n+1) > 0) {
                arr[(arr[i] % (n+1) - 1)] +=(n+1);
            }
        }
        for(let i = 0; i < n; i++) {
            arr[i] = Math.floor(arr[i] / (n+1));
        }
    }
}