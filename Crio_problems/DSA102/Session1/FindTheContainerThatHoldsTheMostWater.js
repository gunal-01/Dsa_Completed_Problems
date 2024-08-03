function maxArea(height){
    let left = 0, right = height.length-1;
    let maxArea = 0;
    while(left < right) {
        let currentArea = Math.max(height[left], height[right])*(right-left);
        maxArea = Math.max(maxArea, currentArea);
        if(height[left] < height[right]) {
            left++;
        } else{
            right--;
        }
    }
    return maxArea;
}