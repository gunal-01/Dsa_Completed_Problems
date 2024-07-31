function isPrime(num) {
    if(num <= 1) return false;
        let cond = Math.sqrt(num);
        for(let factor=2;factor<=cond;factor++) {
            if(num % factor === 0) {
                return false;
            }
        }
        return true;
}