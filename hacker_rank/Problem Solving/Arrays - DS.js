// https://www.hackerrank.com/challenges/arrays-ds/problem?isFullScreen=true
function reverseArray(a) {
    let l = a.length;
    let aReverse = []
    for (let i = 0; i < l; i++) {
       aReverse[i] = a[l - 1 - i]; 
    }
    return aReverse
}
function main() {
}
if (require.main === module) {
    main();
}