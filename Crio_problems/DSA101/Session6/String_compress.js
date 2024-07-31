/**
 * @param {string} s
 * @return {string}
 */
function stringCompression(s) {
    let prev = s[0];
    let cnt = 1;
    let compress = "";
    for(let i = 1; i < s.length; i++) {
        if(s[i] === prev) {
            cnt++;
        } else {
            compress += prev+cnt;
            prev = s[i];
            cnt = 1;
        }
    }
    compress += prev+cnt;
    if(s.length <= compress.length) {
        return s;
    } else {
    return compress;
    }
}
