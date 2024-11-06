#include<bits/stdc++.h>
using namespace std;

bool containsDuplicate(vector<int>& nums) {
    int n = nums.size();
    if(n == 1 || n == 0) {
        return false;
    }
    sort(nums.begin(), nums.end());
    int check = nums[0];
    for(int index = 1; index < n; index++) {
        if(nums[0] == check) {
            return true;
        } else {
            check = nums[index];
        }
    }
    return false;
}

int main() {
    vector<int> nums = {1,2,3,4,3};
    bool result = containsDuplicate(nums);
    
    if(result) {
        cout << "true";
    } else {
        cout << "false";
    }
}