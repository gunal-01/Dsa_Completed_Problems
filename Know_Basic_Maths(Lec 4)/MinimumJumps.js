class Solution {
    minJumps(arr,n){
        //code here
        if (n ==1) return 0;
        if(arr[0] == 0) return -1;
        let maxReach = arr[0];
        let stepEnd = arr[0];
        let jumps = 1;
        for(let i = 1; i < n;i++) {
            if(i == n-1) return jumps;
            maxReach = Math.max(maxReach, i+arr[i]);
            if( i == stepEnd) {
                jumps++
                stepEnd = maxReach;
                if(stepEnd <= i) return -1;
            }
        }
        return -1;
    }
}