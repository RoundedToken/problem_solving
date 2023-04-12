// https://www.hackerrank.com/challenges/the-birthday-bar/problem?isFullScreen=true
function birthday(s, d, m) {
    let count = 0;
    let B = Array(s.length + 1).fill(0);
    for (let i = 1; i < B.length; i++) {
        B[i] = B[i - 1] + s[i - 1];
    }
    console.log(B);
    for (let i = 0; i < B.length - 1; i++) {
        if (B[i + m] - B[i] == d) {
            count++;
        }
    }
    return count;
}

function main() {
}
if (require.main === module) {
    main();
}