class solution {
    public:
        bool hashMatch(string s, string p) {
            
    //string s = "leetcode";
    //string p = "ee*e";
            size_t starPos = p.find("*");
            
            string pre = p.substr(0, starPos); // while finding substr we're ignoring the * for pre
            string suf = p.substr(starPos + 1); // same we're ignoring * and getting suf
            
            size_t start = s.find(pre); // we're finding the starting position on string s "leetcode" through the help of pre
            
            if(start == string::npos) return false; // creating an edge case if the position is not found
            
            start += pre.size(); // adjusting the start size in s based on the value which we got for start and for prefix
            
            return s.substr(start).find(suf) != string::npos; //Finally, returning the substring and the position of the suffix element.
        }
};