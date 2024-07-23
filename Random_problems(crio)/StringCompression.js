/**				
* @param {character[]} chars				
* @return {number}				
*/				
var compress = function(chars) {				
    let index = 0; // Index to modify the chars array				
    let i = 0; // Pointer to iterate through the chars array				
                    
    while (i < chars.length) {				
    let currentChar = chars[i];				
    let count = 0;				
                    
    // Count the number of occurrences of the current character				
    while (i < chars.length && chars[i] === currentChar) {				
    i++;				
    count++;				
    }				
                    
    // Update the chars array with the current character				
    chars[index] = currentChar;				
    index++;				
                    
    // If count is greater than 1, update the chars array with the count				
    if (count > 1) {				
    for (let digit of String(count)) {				
    chars[index] = digit;				
    index++;				
    }				
    }				
    }				
                    
    // Return the new length of the array				
    return index;				
    };				