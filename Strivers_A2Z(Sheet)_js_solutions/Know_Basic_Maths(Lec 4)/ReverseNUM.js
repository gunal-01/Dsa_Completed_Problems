/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let revNum = 0;
    let sign = Math.sign(x);
    x = Math.abs(x);

    while(x > 0) {
        let Ld = x % 10;
        if (revNum > Math.floor((2147483647 - Ld) / 10)) {
            return 0;
        }
        revNum = (revNum * 10) + Ld;
        x = Math.floor(x/10);
    }
    revNum *= sign;

    return revNum;
};