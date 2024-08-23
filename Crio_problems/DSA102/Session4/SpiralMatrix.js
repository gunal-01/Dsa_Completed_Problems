/**
 * @param {number} n
 * @return {number[][]}
 */
function spiralMatrixII(n) {
    // implement this function
    let topmost_row = 0, bottommost_row = n-1, leftmost_col = 0, rightmost_col = n-1;
    let arr = new Array(n);
    for(let i = 0; i < n; i++) {
        arr[i] = new Array(n);
    }
    let count = 1;
    while(count <= n*n) {
        for(let i = leftmost_col; i <= rightmost_col; i++) {
            arr[topmost_row][i] = count;
            count++;
        }
        topmost_row++;

        for(let i = topmost_row; i <= bottommost_row; i++) {
            arr[i][rightmost_col] = count;
            count++;
        }
        rightmost_col--;
    }
}