// https://www.hackerrank.com/challenges/kangaroo/problem?isFullScreen=true
function kangaroo(x1, v1, x2, v2) {
    if (x1 == x2) {return "YES"}
    let i = 0;
    let distance = Math.abs(x1 - x2);
    x1 += v1;
    x2 += v2;
    if (distance <= Math.abs(x1 - x2)) { return 'NO' }
    else {
        while (x1 != x2) {
            if (i % 2 != 0) {
                x1 += v1;
            } else {
                x2 += v2;
            }
            i++;
            if (i > 5000) {return 'NO'}
        }
    }
    return "YES";
}
function main() {
}
if (require.main === module) {
    main();
}