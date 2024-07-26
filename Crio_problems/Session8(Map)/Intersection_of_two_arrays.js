/**
 * @param {number} n
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @return {number[]}
 */
function intersectionOfTwoArrays(n, nums1, m, nums2){
    //implement this function
    let map = new Map();
    for(let num of nums1) {
        map.set(num, (map.get(num) || 0)+ 1);
    }
    let intersection = [];
    for(let num of nums2) {
        if(map.has(num) && map.get(num) > 0) {
            intersection.push(num);
            map.set(num, map.get(num) - 1);
        }
    }
    intersection.sort((a, b) => a - b);
    return intersection;
}