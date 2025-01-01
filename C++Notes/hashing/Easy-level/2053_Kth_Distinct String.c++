class Solution {
public:
    string kthDistinct(vector<string>& arr, int k) {
        unordered_map<string, int> hashmap;
        for (string i : arr) {
            hashmap[i]++;
        }
        int count = 0;
        for (string i : arr) {
            if (hashmap[i] == 1) {
                count++;
                if (count == k) {
                    return i;
                }
            }
        }
        return "";
    }
};



//problem-link https://leetcode.com/problems/kth-distinct-string-in-an-array/description/