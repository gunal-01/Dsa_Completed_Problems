/**
 * @param {string} moves
 * @return {boolean}
 */
function robotReturnToOrigin(moves) {
    //implement this function
    let Ucnt = 0;
    let Rcnt = 0;
    for(let i = 0; i < moves.length; i++) {
        if(moves[i] == "U") {
            Ucnt++;
        } else if(moves[i] == "D") {
            Ucnt--;
        } else if(moves[i] == "R") {
            Rcnt++;
        } else {
            Rcnt--;
        }
    }
    if(Math.abs(Rcnt)+Math.abs(Ucnt) == 0) {
        return true;
    } else {
        return false;
    }
}