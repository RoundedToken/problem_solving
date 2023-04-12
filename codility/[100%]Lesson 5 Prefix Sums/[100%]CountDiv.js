// https://app.codility.com/programmers/lessons/5-prefix_sums/count_div/
function solution(A, B, K) {
    function m(n, k) {
    if (n < 0) return 0;
    return ~~(n / k) + 1;
}
    // let X = (A - 1) / K + 1;
    // let Y = B / K + 1;
    // let sol = parseInt(Y) - parseInt(X);


    // let X = ~~((A - 1) / K) +1;
    // let Y = ~~(B / K) +1;
    // let sol = Y - X;
    //console.log(X, Y, sol);

    // let X = m(A-1, K);
    // let Y = m(B, K)
    let sol = m(B, K) - m(A-1, K);


    return sol;
}
function main() {
    let A = 0;
    let B = 0;
    let K = 2;
    console.log(solution(A, B, K));
}
if (require.main === module) {
    main();
}