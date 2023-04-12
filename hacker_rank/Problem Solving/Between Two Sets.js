// https://www.hackerrank.com/challenges/between-two-sets/problem?isFullScreen=true
function getTotalX(a, b) {
    let C = [];
    let check = 0;
    let count = 0;
    for (let i = a[0]; i <= (b[0]); i++) {
        for (let g = 0; g < a.length; g++) {
            if (i % a[g] == 0) {
                check++;
            }
        }
        if (check == a.length) {
            C.push(i);
        }
        check = 0;
    }
    for (let i = 0; i < C.length; i++) {
        for (let g = 0; g < b.length; g++) {
            if (b[g] % C[i] == 0) {
                check++;
            }
        }
        if (check == b.length) {
            count++;
        }
        check = 0;
    }
    return count;
}
function main() {
}
if (require.main === module) {
    main();
}