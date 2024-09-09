/**
 * @param {number} n
 * @param {number[]} arr
 * @return {number}
 */
function minDiff(n, arr) {
    //implement this function
    arr.sort((a,b) => a - b);

    let minDiff = Infinity;

    for(let i = 1; i < n; i++){
        minDiff = Math.min(minDiff, arr[i] - arr[i -1]);
    }
    return minDiff;
}

function main() {
    let n = parseInt(readLine());
    let arr = readIntArr();

    let minimumDifference = minDiff(n, arr);
    print(minimumDifference)
}