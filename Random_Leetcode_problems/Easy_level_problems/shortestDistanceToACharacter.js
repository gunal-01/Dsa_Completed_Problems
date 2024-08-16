/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */
var shortestToChar = function(s, c) {
    let leftIndex = 0;
        let rightIndex = 0; 
        const distances = []; 
    
        
        while (leftIndex < s.length) {
            
            while (rightIndex < s.length && s[rightIndex] !== c) rightIndex++;
            
            if (rightIndex >= s.length) break;
    
            if (s[leftIndex] === c) rightIndex = leftIndex;
            
            distances[leftIndex] = Math.abs(rightIndex - leftIndex);
            leftIndex++;
        }
    
        leftIndex = s.length - 1;
        rightIndex = s.length - 1; 
    
        
        while (leftIndex >= 0) {
            
            while (rightIndex >= 0 && s[rightIndex] !== c) rightIndex--;
            
            if (rightIndex < 0) break;
            
            if (s[leftIndex] === c) rightIndex = leftIndex;
            
            const dist = Math.abs(rightIndex - leftIndex);
            if (distances[leftIndex] > dist) distances[leftIndex] = dist;
            leftIndex--;
        }
    
        return distances;
    };