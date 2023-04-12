// https://www.hackerrank.com/challenges/angry-professor/problem?isFullScreen=true
function angryProfessor(k, a) {
    let count = 0;
    for (let i = 0; i < a.length; i++) {
        if (a[i] <= 0) {
            count++;
        }
    }
    if (count >= k) {return "NO"}
    else {return "YES"}
}
function main() {
}
if (require.main === module) {
    main();
}