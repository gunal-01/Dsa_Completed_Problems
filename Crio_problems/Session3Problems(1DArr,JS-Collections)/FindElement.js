/** 
 * @param {number} n
 * @param {number[]} arr
 * @param {number} x
 * @return {number}
 */
// TODO: Implement this method
function findElement(n, arr, x) {
    /* return arr.indexof(x); ---approach2 which was literally cleared using inbuild function #T.C = O(N)*/
        for(let i=0; i<n;i++) { 
            //This is approach1 #T.C = O(N)
            if(arr[i]===x) {
                return i;
            }
        }
        return -1;
}