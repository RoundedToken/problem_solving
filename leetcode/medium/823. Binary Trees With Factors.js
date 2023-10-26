// https://leetcode.com/problems/binary-trees-with-factors/?envType=daily-question&envId=2023-10-26

var numFactoredBinaryTrees = function (A) {
    A.sort((a, b) => a - b);
    let len = A.length,
        fmap = new Map(),
        ans = 0;
    for (let i = 0; i < len; i++) {
        let num = A[i],
            ways = 1,
            lim = Math.sqrt(num);
        for (let j = 0, fA = A[0]; fA <= lim; fA = A[++j]) {
            let fB = num / fA;
            if (fmap.has(fB))
                ways = (ways + fmap.get(fA) * fmap.get(fB) * (fA === fB ? 1 : 2)) % 1000000007;
        }
        fmap.set(num, ways), (ans = (ans + ways) % 1000000007);
    }
    return ans;
};
