function gcd(a, b) {
    while(b !== 0) {
      let temp = b;
             b = a % b;
             a = temp;
    }
    return a;
 }
 function coprimeNumbers(n) {
         if(n === 1) {
           return 1;
         }
         let count = 0;
         for(let i = 1; i< n;i++) {
           if(gcd(i, n)=== 1) {
             count++;
           }
         }
         return count;
 }