// https://www.hackerrank.com/challenges/minimum-distances/problem?isFullScreen=true
function minimumDistances(a) {
    let min = Number.MAX_VALUE;
    let L = a.length;
    for (let i = 0; i < L - 1; i++) {
        for (let g = i + 1; g < L; g++) {
            if (a[i] == a[g]) {
                let d = g - i;
                if (d == 1) { return 1 }
                if (d < min) { min = d }
            }
        }
    }
    if (min == Number.MAX_VALUE) { return -1 }
    else { return min }
}
function main() {
    let a = [7, 1, 3, 4, 1, 7];
    console.log(minimumDistances(a));
}
if (require.main === module) {
    main();
}