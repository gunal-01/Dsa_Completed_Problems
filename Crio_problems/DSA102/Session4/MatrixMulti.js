/**
 * @param {number} n1
 * @param {number} m1
 * @param {number} n2
 * @param {number} m2
 * @param {number[][]} grid1
 * @param {number[][]} grid2
 * @return {number[][]}
 */
function matrixMultiplication(n1,m1,n2,m2,grid1,grid2) {
    //implement this function
    let grid3 = new Array(n1);
    for(let i = 0; i< n1; i++) {
        grid3[i] = new Array(m2).fill(0);
    }
    for(let r = 0; r < n1; r++) {
        for(let c = 0; c < m2; c++) {
            for(let k = 0; k < m1; k++) {
                grid3[r][c] += grid1[r][k] * grid2[k][c];
            }
        }
    }
    return grid3;
}