/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */


// TODO: Implement this method
function findQuadrant(x,y) {
    
    if(x > 0 && y > 0) {
        return 1;
    } else if(x < 0 && y > 0) {
        return 2;
    } else if(x <0 && y < 0) {
        return 3;
    } else {
        return 4;
    }
}