/**
 * @param {number} n
 * @param {string[]} s
 * @return {number}
 */
function uniqueWords(n,s) {
    const set = new Set();
        for(let i = 0; i < n; i++) {
            set.add(s[i])
        }
        return set.size;
}