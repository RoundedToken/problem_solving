// https://www.hackerrank.com/challenges/fair-rations/problem?isFullScreen=true&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen
function fairRations(B) {
    let l = B.length;
    let count = 0;
    for (let i = 0; i < l - 1; i++) {
        if (B[i] % 2 != 0) {
            B[i]++;
            B[i + 1]++;
            count += 2;
        }
    }
    if (B[l - 1] % 2 == 0) { return count}
    else return "NO"
}

function main() {
    let B = [2, 3, 4, 5, 6];
    console.log(fairRations(B));
}
if (require.main === module) {
    main();
}