
/**
 * @param {number} n
 * @returns { }
*/

// class Solution{
 function printNos(N){
        //code here
        let numbers = ""
        const printNumber = (N)=>{
            if(N>0) {
                printNumber(N-1)
                numbers += N +" ";
            }
        }
        printNumber(N)
        console.log(numbers)
    }
// }

console.log(printNos(10))
