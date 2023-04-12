// https://www.hackerrank.com/challenges/circular-array-rotation/problem?isFullScreen=true
function circularArrayRotation(a, k, queries) {
    let B = [];
    for (let i = 0; i < k; i++) {
        let x = a[a.length - 1];
        for (let g = a.length - 1; g > 0; g--) {
            a[g] = a[g - 1];
        }
        a[0] = x;
    }
    for (let i = 0; i < queries.length; i++) {
        B[i] = a[queries[i]];
    }
    return B
}
function main() {
}
if (require.main === module) {
    main();
}