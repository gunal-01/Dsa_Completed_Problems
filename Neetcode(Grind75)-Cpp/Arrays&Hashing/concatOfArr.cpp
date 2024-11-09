class Solution {
public:
    vector<int> getConcatenation(vector<int>& nums) {
        int n = nums.size();
        vector<int> ans(2 * n);
        for(int i = 0; i < n; i++) {
            ans[i] = ans[i+n] = nums[i];
        }
        return ans;
    }
};

// Initial Variables and Setup

// nums = [1, 2, 3]
// n = nums.size(), so n = 3
// ans = vector<int>(2 * n), which initializes ans to have 6 elements, all initially set to 0:
// plaintext
// Copy code
// ans = [0, 0, 0, 0, 0, 0]
// Loop Iteration 1 (i = 0)

// Calculating First Half: ans[i] = nums[i]
// ans[0] = nums[0], so ans[0] = 1
// Now, ans = [1, 0, 0, 0, 0, 0]
// Calculating Second Half: ans[i + n] = nums[i]
// ans[0 + 3] = nums[0], so ans[3] = 1
// Now, ans = [1, 0, 0, 1, 0, 0]
// Loop Iteration 2 (i = 1)

// Calculating First Half: ans[i] = nums[i]
// ans[1] = nums[1], so ans[1] = 2
// Now, ans = [1, 2, 0, 1, 0, 0]
// Calculating Second Half: ans[i + n] = nums[i]
// ans[1 + 3] = nums[1], so ans[4] = 2
// Now, ans = [1, 2, 0, 1, 2, 0]
// Loop Iteration 3 (i = 2)

// Calculating First Half: ans[i] = nums[i]
// ans[2] = nums[2], so ans[2] = 3
// Now, ans = [1, 2, 3, 1, 2, 0]
// Calculating Second Half: ans[i + n] = nums[i]
// ans[2 + 3] = nums[2], so ans[5] = 3
// Now, ans = [1, 2, 3, 1, 2, 3]
// Return the Result

// After completing all iterations of the loop, ans is fully populated as [1, 2, 3, 1, 2, 3].
// The function then returns this array.
// Final State of Variables
// At the end of the function:

// nums = [1, 2, 3] (original array, unchanged)
// ans = [1, 2, 3, 1, 2, 3] (result array with the concatenation of nums)
// Summary
// In each loop iteration:

// We copy nums[i] into two positions in ans:
// First Half (ans[i]): stores nums[i] in the beginning half of ans.
// Second Half (ans[i + n]): stores nums[i] in the second half of ans, offset by n.
// By structuring it this way, we efficiently duplicate the nums array within ans.