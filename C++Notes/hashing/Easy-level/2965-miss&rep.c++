class Solution {
public:
    vector<int> findMissingAndRepeatedValues(vector<vector<int>>& grid) {
        int repeating = 0, missing = 0;
        int sum = 0;
        unordered_map<int, int> map;
        for(auto row : grid) {  // repeating
            for(auto i : row) {
                map[i]++;
                sum++;
            }
        }

        for(int i = 1; i <= sum; i++) {  // for finding both repeating and missing
            if(map[i] == 2) repeating = i;
            else if(map[i] == 0) missing = i;
        }
        return {repeating, missing};
    }
};