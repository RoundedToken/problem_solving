// https://leetcode.com/problems/find-in-mountain-array/?envType=daily-question&envId=2023-10-12

var findInMountainArray = function (target, mountainArr) {
    // Binary search for peak
    let len = mountainArr.length(),
        l = 0,
        r = len - 1,
        m = ((l + r) / 2) | 0;
    while (l <= r) {
        let L = mountainArr.get(l),
            R = mountainArr.get(r),
            M = mountainArr.get(m);
        if (L == target) return l;
        if (L < M && R < M) (l = ((m + l) / 2) | 0), (r = ((m + r) / 2) | 0);
        else if (l != m && L == M) (r = m - 1), l++;
        else if (r != m && R == M) (l = m + 1), r--;
        else if (L <= M) l = m + 1;
        else if (R <= M) r = m - 1;
        m = ((l + r) / 2) | 0;
    }
    // Binary search for target on left slope
    let l2 = 0,
        r2 = m;
    while (l2 <= r2) {
        let m2 = ((l2 + r2) / 2) | 0,
            M2 = mountainArr.get(m2);
        if (M2 == target) return m2;
        if (M2 < target) l2 = m2 + 1;
        if (M2 > target) r2 = m2 - 1;
    }
    // Binary search for target on right slope
    let l3 = m,
        r3 = len - 1;
    while (l3 <= r3) {
        let m3 = ((l3 + r3) / 2) | 0,
            M3 = mountainArr.get(m3);
        if (M3 == target) return m3;
        if (M3 < target) r3 = m3 - 1;
        if (M3 > target) l3 = m3 + 1;
    }
    return -1;
};
