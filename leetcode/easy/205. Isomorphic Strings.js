// https://leetcode.com/problems/isomorphic-strings/description/?envType=daily-question&envId=2024-04-02

var isIsomorphic = function (s, t) {
    let objS = {};
    let objT = {};
    for (let i = 0; i < s.length; i++) {
        if (objS[s[i]] && objS[s[i]] !== t[i]) return false;
        objS[s[i]] = t[i];
        if (objT[t[i]] && objT[t[i]] !== s[i]) return false;
        objT[t[i]] = s[i];
    }
    return true;
};
