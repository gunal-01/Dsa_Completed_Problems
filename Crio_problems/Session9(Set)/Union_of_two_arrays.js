/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
function unionOfTwoArrays(A, B) {
    //implement this function
    let set = new Set();
    for(let i = 0; i < A.length; i++){
        set.add(A[i]);
    }
    for(let i=0;  i<B.length; i++) {
        set.add(B[i]);
    }
    let arr = Array.from(set);
    arr.sort((a,b) =>a - b);

    return arr;
}