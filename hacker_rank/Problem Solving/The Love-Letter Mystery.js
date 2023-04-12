// https://www.hackerrank.com/challenges/the-love-letter-mystery/problem?isFullScreen=true&h_r=next-challenge&h_v=zen
function theLoveLetterMystery(s) {

    let count = 0;
    let l = s.length;
    console.log("a".charCodeAt(), "c".charCodeAt())

    if (s == s.split("").reverse().join("")) return count
    else {

        for (let i = 0; i < l/2; i++) {
            let x = s.charAt(i);
            let y = s.charAt(l - 1 - i)
            if (x != y) count += Math.abs(x.charCodeAt() - y.charCodeAt())
        }
        return count

    }

}
function main() {
    let s = "abc";
    //s = "aa"
    console.log(theLoveLetterMystery(s));
}
if (require.main === module) {
    main();
}