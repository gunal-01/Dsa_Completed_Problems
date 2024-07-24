/**
 * @param {number} n
 * @return {string[]}
 */
function fizzBuzz(n) {
    let results = [];
    for(let i = 1; i<=n; i++) {
        let ans = "";
        if(i%3 === 0 && i%5===0) {
            ans = "FizzBuzz";
        } else if(i%3 === 0) {
            ans = "Fizz";
        } else if (i%5===0) {
            ans = "Buzz";
        } else {
            ans = i;
        }
        results.push(ans);
    }
    return results;
}