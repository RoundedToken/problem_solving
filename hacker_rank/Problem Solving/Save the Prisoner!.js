// https://www.hackerrank.com/challenges/save-the-prisoner/problem?isFullScreen=true
function saveThePrisoner(n, m, s) {
    let prisoner = (m + s - 1) % n;
    if (prisoner == 0) {
        prisoner = n;
    }
    return (prisoner);
}
function main() {
}
if (require.main === module) {
    main();
}