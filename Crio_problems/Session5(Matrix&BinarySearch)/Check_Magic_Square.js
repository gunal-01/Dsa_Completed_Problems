/**
 * @param {number} n
 * @param {number[][]} matrix
 * @return {boolean}
 */


// TODO: Implement this method
function checkMagicSquare(n, matrix) {
    let rowSet = new Set();
    let colmSet = new Set();
    let rowSum = 0;
    let colmSum = 0;

    for(let i = 0; i < n; i++) {
        rowSum = 0; 
        for(let j = 0; j< n ; j++) {
            rowSum += matrix[i][j];
        }
        rowSet.add(rowSum);
    }
        if(rowSet.size > 1) {
            return false;
        }
        for(let i = 0; i < n; i++) {
            colmSum = 0;
            for(let j = 0; j < n; j++) {
                colmSum += matrix[j][i];
            }
            colmSet.add(colmSum);
        }
        if(colmSet.size > 1){
            return false;
        }
        let diag1 = 0;
        let diag2 = 0;
        let i = 0;let j = 0;
        while(i < n && j < n) {
            diag1 += matrix[i][j];
            i++;
            j++;
        }
        i =0; j= n-1;
        while(i < n && j >= 0) {
            diag2 += matrix[i][j];
            i++;
            j++;
        }
        if(diag1 != diag2) {
            return false;
        }
        if(rowSum == colmSum && colmSum == diag1) {
            return true;
        }
        return false;
    }
