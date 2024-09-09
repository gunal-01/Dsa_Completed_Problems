/**
 * @param {number} n
 * @param {number[][]} intervals
 * @return {number[][]}
 */
function mergeIntervals(n, intervals) {
    intervals.sort((a,b) => a[0]-b[0]);

    let ans = [];
    let startA = intervals[0][0], endA = intervals[0][1];
    for(let i = 1; i < n; i++) {
        let startB = intervals[i][0], endB = intervals[i][1];
        if(startB>endA) {
            ans.push([startA, endA]);
            startA = startB;
            endA = endB;
        } else {
            endA = Math.max(endA, endB);
        }
    }
    ans.push([startA, endA]);
    return ans;
}