function reverseAnArray(arr) {
    function helper(start, end) {
        if(start >= end) {
            return;
        }
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end]= temp;
        helper(start+1, end-1);
    }
    helper(0, arr.length-1);
    return arr;
}

console.log(reverseAnArray([1,2,3,4,5])); // output is 5,4,3,2,1