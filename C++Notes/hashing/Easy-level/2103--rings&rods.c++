class Solution {
public:
    int countPoints(string rings) {
    unordered_map<int, set<char>> rodColorMap;

    // Split the rings string into colors and rods
    for (size_t i = 0; i < rings.size(); i += 2) {
        char color = rings[i];
        int rod = rings[i + 1] - '0';
        rodColorMap[rod].insert(color);
    }

    // Count rods with all three colors
    int count = 0;
    for (const auto& pair : rodColorMap) {
        if (pair.second.size() == 3) {
            count++;
        }
    }

    return count;
    }
};