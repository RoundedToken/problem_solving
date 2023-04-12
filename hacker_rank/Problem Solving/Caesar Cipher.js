// https://www.hackerrank.com/challenges/caesar-cipher-1/problem?isFullScreen=true&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen
function caesarCipher(s, k) {
    let alph = "abcdefghijklmnopqrstuvwxyz";
    let alphNew = Array();
    let l = alph.length;
    k = k % l;
    alph = Array.from(alph);
    alphNew = alph.slice(k, l).concat(alph.slice(0, k))
    let MAP = new Map();
    for (let i = 0; i < l; i++) {
        MAP.set(alph[i], alphNew[i]);
    }
    let sNew = "";
    for (let i = 0; i < s.length; i++) {
            if (MAP.has(s.charAt(i))) sNew += MAP.get(s.charAt(i));
            else if (MAP.has(s.charAt(i).toLowerCase())) sNew += MAP.get(s.charAt(i).toLowerCase()).toUpperCase();
            else sNew += s.charAt(i)
    }
    return sNew

}
function main() {
    let s = "middle-Outz";
    let k = 2;
    console.log(caesarCipher(s, k));
}
if (require.main === module) {
    main();
}