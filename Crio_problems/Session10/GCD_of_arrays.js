function gcd(n1, n2) {
    if(n2 == 0) {
        return n1;
    }
    return gcd(n2, n1%n2);
}


function gcdOfArray(n,arr) {
    let res = gcd(arr[0], arr[1]);
    for(let i = 2; i<n; i++) {
        res = gcd(res, arr[i]);
    }
    return res;
}
