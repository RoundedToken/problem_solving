// https://www.hackerrank.com/challenges/funny-string/problem?isFullScreen=true
function funnyString(s) {
    s = s.split("");
    let sOrig = Array.from(s);
    let sReverse = s.reverse();
    let l = sOrig.length;
    for (let i = 1; i < l; i++) {
        if (Math.abs(sOrig[i].charCodeAt() - sOrig[i - 1].charCodeAt()) != Math.abs(sReverse[i].charCodeAt() - sReverse[i - 1].charCodeAt())) {
            return "Not Funny"
        }
    }
    return "Funny"
}
function main() {
    let s = 'bcxz';
    console.log(funnyString(s));
}
if (require.main === module) {
    main();
}