// https://leetcode.com/problems/greatest-common-divisor-traversal/description/?envType=daily-question&envId=2024-02-25

var canTraverseAllPairs = function (nums) {
    let primes = [
        2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89,
        97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181,
        191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281,
        283, 293, 307, 311, 313,
    ];
    let unionFind = new Array(nums.length).fill(-1);
    let primeIdxs = {};

    let find = (i) => (unionFind[i] < 0 ? i : find(unionFind[i]));

    nums.forEach((num, i) => {
        let primeFactors = [];
        for (let p of primes) {
            if (num % p === 0) {
                primeFactors.push(p);
                while (num % p === 0) num = Math.floor(num / p);
            }
        }

        if (num !== 1) primeFactors.push(num);

        for (let factor of primeFactors) {
            if (factor in primeIdxs) {
                let pi = find(i);
                let pj = find(primeIdxs[factor]);
                if (pi !== pj) {
                    if (unionFind[pi] > unionFind[pj]) [pi, pj] = [pj, pi];
                    unionFind[pi] += unionFind[pj];
                    unionFind[pj] = pi;
                }
            } else primeIdxs[factor] = i;
        }
    });

    return Math.abs(Math.min(...unionFind)) === nums.length;
};
