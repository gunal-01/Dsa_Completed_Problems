class Solution {
public:
    vector<int> replaceElements(vector<int>& arr) {
        int n = arr.size();
        int max_right = -1;
        for(int i = n - 1; i >= 0; i--) {
            int current = arr[i];
            arr[i] = max_right; // [0,0,0,0,0,-1]  /*arr[i] which is 1 get's replaced into -1 at last index similarly all values gets changed and as well as max_right value will be updated if the below mentioned If condition gets passed else it stores the same value in the index*/
            if(current > max_right) {
                max_right = current;
            }
        }
        return arr;
    }
};