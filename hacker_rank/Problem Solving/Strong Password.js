// https://www.hackerrank.com/challenges/strong-password/problem?isFullScreen=true&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen
function minimumNumber(n, password) {
    let specials = new Set(["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "+"]);
    let digits = new Set(["0", "1","2", "3", "4", "5","6", "7", "8", "9"]);
    let count = 4;
    let upCase = false;
    let lowCase = false;
    let special = false;
    let dig = false;
    for (let i = 0; i < password.length; i++) {
        if (specials.has(password.charAt(i))) special = true;
        else if (digits.has(password.charAt(i))) dig = true;
        else if (password.charAt(i) === password.charAt(i).toUpperCase()) upCase = true;
        else if (password.charAt(i) === password.charAt(i).toLowerCase()) lowCase = true;
    }
    if (upCase) count--;
    if (lowCase) count--;
    if (special) count--;
    if (dig) count--;
    if (n + count < 6) return 6 - n
    return count
}
function main() {
    let password = "Ab1";
    let n = 3;
    console.log(minimumNumber(n, password));
}
if (require.main === module) {
    main();
}