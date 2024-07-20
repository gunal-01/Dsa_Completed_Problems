
/**
 * @param {number} n
 * @returns { }
*/

class Solution{
    printNos(N){
        //code here
        let numbers = ""
        const printNumber = (N)=>{
            if(N>0) {
                printNumber(N-1)
                numbers = numbers+N+" "
            }
        }
        printNumber(N)
        console.log(numbers)
    }
}