/**
 * @param {number} n
 * @param {number[][]} matrix
 * @return {number[][]} 
 */
function rotateImage(n, matrix) {
    //implement this function
    for(let i = 0; i < n; i++) {
        for(let j = 0; j< i; j++){
            [matrix[i][j], matrix[j][i]] = [matrix[j][i],matrix[i][j]];
        }
    }
    for(let i = 0; i < n; i++) {
        matrix[i].reverse();
    }
    return matrix;
}
