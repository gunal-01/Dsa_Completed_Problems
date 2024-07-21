function reverseWordsInAString(s) {
    //implement this function
    let arr = s.split(" ");
        arr = arr.reverse();
    let res = [];
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] !== " ") {
            res.push(arr[i]);
        }
    }
    return res.join(" ");
}