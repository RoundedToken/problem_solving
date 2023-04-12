// https://app.codility.com/programmers/lessons/3-time_complexity/frog_jmp/
function frogJump(X, Y, D) {
    let q = (Y - X) % D;
    let sol = (Y - X) / D;
    sol = Math.trunc(sol);
    if (q == 0) {
        return sol;
    } 
    sol++; 
    return sol;
}
function main() {
    let X = 10;
    let Y = 85;
    let D = 30;
    console.log(frogJump(X, Y, D));
}
if (require.main === module) {
    main();
}