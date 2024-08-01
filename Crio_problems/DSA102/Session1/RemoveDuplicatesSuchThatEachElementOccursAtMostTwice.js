function removeDuplicatesFromArray(n, arr) {
    let x = 0;
    let ans = [];
    for(let i = 0; i < n; i++) {
        if(i < n -2 && arr[i] == arr[i + 1] && arr[i] == arr[i + 2])
            continue;
        else {
            arr[x] = arr[i];
            x++;
        }
    }
    for(let i = 0; i < x; i++) {
        ans.push(arr[i]);

    }
    return x, ans;
}

console.log(removeDuplicatesFromArray(7, [2,2,2,3,4,4,9]));