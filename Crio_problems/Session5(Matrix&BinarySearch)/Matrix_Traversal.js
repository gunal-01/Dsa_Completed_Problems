function matrixTraversal(matrix, currPosRow, currPosCol, dirToMove, stepsToMove) {
    let res = [];

    for(let i = 0; i <stepsToMove; i++) {
        if(dirToMove==3) {
            currPosCol--;
        } else if(dirToMove==1) {
            currPosCol++;
        } else if(dirToMove == 4) {
            currPosRow--;
        } else {
            currPosRow++;
        }
if(currPosRow<0 || currPosCol<0 || currPosRow>=matrix.length || currPosCol>=matrix[0].length)      
{
    res = [];
    res.push(-1);
    return res;

    }
    res.push(matrix[currPosRow][currPosCol]);

    }
    return res;

}