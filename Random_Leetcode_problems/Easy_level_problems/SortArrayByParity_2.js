/**		
* @param {number[]} nums		
* @return {number[]}		
*/		
var sortArrayByParityII = function(nums) {		
    let evens = nums.filter(num => num % 2 === 0)		
    let odds = nums.filter(num => num % 2 !== 0)		
    let result = [];		
    for(let i = 0; i < evens.length; i++) {		
    result.push(evens[i]);		
    if(i < odds.length) {		
    result.push(odds[i]);		
    }		
    }		
    return result;		
    };		