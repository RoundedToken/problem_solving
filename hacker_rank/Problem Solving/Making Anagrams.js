// https://www.hackerrank.com/challenges/making-anagrams/problem?isFullScreen=true&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen
function makingAnagrams(s1, s2) {
    let uniq = new Set(Array.from(s1.concat(s2)));
    let delCount = 0;
    uniq.forEach((val) => {
        let x = Array.from(s1.matchAll(val)).length
        let y = Array.from(s2.matchAll(val)).length;
        if (x != 0 && y != 0) delCount += Math.min(x, y) * 2;
    })
    return s1.length + s2.length - delCount

}
function main() {
    let s1 = "cde";
    let s2 = "abc";
    console.log(makingAnagrams(s1, s2));
}
if (require.main === module) {
    main();
}