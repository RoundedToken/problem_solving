// https://www.hackerrank.com/challenges/absolute-permutation/problem?isFullScreen=true&h_r=next-challenge&h_v=zen
function absolutePermutation(n, k) {const D = {}
for (let i=1; i <= n; i++)
    if (i-k > 0 && !D[i-k]) D[i-k] = i
    else if (i+k <= n && !D[i+k]) D[i+k] = i
    else return [-1]
return Object.values(D)
}
function main() {
    let n = 10;
    let k = 0;
    console.log(absolutePermutation(n, k));
}
if (require.main === module) {
    main();
}