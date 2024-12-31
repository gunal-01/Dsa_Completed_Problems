class Solution {
public:
    int countKDifference(vector<int>& nums, int k) {
        int count = 0;
        for (int i = 0; i < nums.size(); i++) {
            for (int j = i + 1; j < nums.size(); j++) {
                if (abs(nums[i] - nums[j]) == k) {
                    count++;
                }
            }
        }
        return count;
        return 0;
    }
};

// length = 4 ---> [1,2,2,1] limit = 0 to  n -1    i th iteration
// length = 4 ---> [1,2,2,1] limit = 1 to  n -1    j th iteration