function mergeSortedArray(m, nums1, n, nums2) {
    let x = m-1;
    let y = n-1;
    let z = m+n-1;
    while(y >= 0) {
        if(x >= 0 && nums1[x] > nums2[y]) {
            nums1[z--] = nums1[x--];
        } else {
            nums1[z--] = nums2[y--];
        }
    }
    return nums1;
}