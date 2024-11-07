// approach 1
class Solution
{
public:
    vector<int> twoSum(vector<int> &nums, int target)
    {
        int n = nums.size();
        for (int i = 0; i < n - 1; i++)
        {
            for (int j = i + 1; j < n; j++)
            {
                if (nums[i] + nums[j] == target)
                {
                    return {i, j};
                }
            }
        }
        return {};
    }
};

// approach 2
class Solution
{
public:
    vector<int> twoSum(vector<int> &nums, int target)
    {
        int n = nums.size();
        unordered_map<int, int> map;
        for (int i = 0; i < n; i++)
        {
            int complement = target - nums[i];
            if (map.find(complement) != map.end())
            {
                return {map[complement], i};
            }
            map[nums[i]] = i;
        }
        return {};
    }
};

/*
approach 2 explanation:
First Iteration (i = 0)

Current Element (nums[0] = 2)
Calculate Complement: complement = target - nums[0] = 9 - 2 = 7
Here, 7 is the number we’re looking for to pair with 2 so that their sum equals the target (9).
Map Check: map.find(7) != map.end() checks if 7 is in map:
It’s not there in the first iteration, so we skip to storing 2 in map.
Map Update: Store nums[0] (2) with its index (0): map[2] = 0.
Now, map = {2: 0}.
Second Iteration (i = 1)

Current Element (nums[1] = 7)
Calculate Complement: complement = target - nums[1] = 9 - 7 = 2
This time, 2 is the complement we’re looking for to add up to 9 with 7.
Map Check: map.find(2) != map.end() checks if 2 is in map:
2 was added in the first iteration, so it is found in map.
This means we’ve found a valid pair: nums[0] = 2 and nums[1] = 7.
Return the Indices: The line result = {map[complement], i}; will set result to [0, 1].
Here, map[complement] returns 0 (the index of 2), and i is 1 (the index of 7).
So, the code is not simply adding 2 + 7 to see if it equals the target. Instead,
it’s computing the required complement for each element and checking if that complement has already been seen in a previous iteration. 
This approach ensures that if nums[i] + nums[j] == target, we can find the indices i and j.

*/