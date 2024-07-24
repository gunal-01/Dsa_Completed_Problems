function printNos(N) {
    if(N<1) {
        return "";
    }
    return N+" "+ printNos(N-1);
}

console.log(printNos(4));