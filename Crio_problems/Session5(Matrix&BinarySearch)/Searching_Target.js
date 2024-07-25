/** 
 * @param {number[]} A
 * @param {number} N
 * @param {number} X
 * @return {number}
 */
function searchTarget(N,A,X) {
    //implement this function
    let left = 0; 
    let right = N-1;
    while(left <= right) {
        let mid = Math.floor((left + right)/2);
        
        if(A[mid]===X) {

            return mid;
        }
        else if(A[mid] < X) {
            left = mid+1;
        }
        else  {
            right = mid-1;
        }
    }
    return -1;
}