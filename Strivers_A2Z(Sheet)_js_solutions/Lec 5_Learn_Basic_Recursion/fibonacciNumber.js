/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    return n == 1 ? 1 : n==0? 0 : fib(n-1) + fib(n-2);
};


//leetcodeProblem