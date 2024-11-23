#include<bits/stdc++.h>

using namespace std;



//before getting into STL, you need to understand that c++ STL is divided into four parts:
/*
    * Algorithms - sorting, searching, counting, modifying, partitioning, heap, minimum/maximum, permutations, set operations and other utilities like accumulate, adjacent_diff, inner_prod, iota, reduce.
    * Containers - sequence containers(vector, deque, list, array, forward_list), Associative Containers(set, multiset, map, multimap), 
                   Unordered Associative Containers(unordered_set, unordered_multiset, unordered_map, unordered_multimap), 
                   Container Adapters(stack, queue, priority_queue)
    * Functions -  Function Objects, Comparison Objects, Logical Operators, Functional Utilities.
    * Iterators -  Input Iterators, Output Iterators, Forward Iterators, Bidirectional Iterators, Random Access Iterators. Additionally, Iterator Adapters, Utility Functions.
 */


/*--------------------------------------------------------PAIRS--------------------------------------------------------------------------------------------*/
// Pairs
void explainPair() {
    
    pair<int, int> p = {1,3};

    cout << p.first << " " << p.second;
    
    
    pair<int, pair<int, int>> newPair = {1,{3,4}};
    
    cout << newPair.first << " " << newPair.second.second << " " << newPair.second.first;
    
    pair<int, int> arr[] = {{1,2}, {2,5}, {5,1}};
    
    cout << arr[1].second;
}

int main() {
    explainPair();
}

/*----------------------------------------------------------------------------------------------------------------------------------------*/