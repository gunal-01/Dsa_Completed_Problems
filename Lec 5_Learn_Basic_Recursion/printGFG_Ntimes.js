function printGFG(N) {
    if (N <= 0) {
        return "";
    }
    return "GFG " + printGFG(N - 1);
}

console.log(printGFG(5)); // Output: GFG GFG GFG GFG GFG 
