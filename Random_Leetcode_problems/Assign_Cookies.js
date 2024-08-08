/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    let g1 = g.length;
    let s1 = s.length;
    let children = 0;
    g.sort((a,b) => a - b)
    s.sort((a,b) => a - b)
    let gg = 0, ss = 0;
    while(gg < g1 && ss < s1) {
        if(s[ss] >= g[gg]) {
            children++;
            gg++
        }
        ss++
    }
    return children;
};

//two pointer practice problem on leetcode.