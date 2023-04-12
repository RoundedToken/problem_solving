// https://www.hackerrank.com/challenges/anagram/problem?isFullScreen=true&h_r=next-challenge&h_v=zen
function anagram(s) {
    let count = 0;
    let l = s.length;
    if (l % 2) return -1
    else {
        let left = s.slice(0, l / 2);
        let leftS = new Set(Array.from(left));
        let right = s.slice(l / 2, l);
        //console.log(leftS)
        leftS.forEach((val) => {
            let countL = Array.from(left.matchAll(val)).length;
            let countR = Array.from(right.matchAll(val)).length;
            if (countR - countL < 0) count += Math.abs(countR - countL);
        })
    }
    return count
    // console.log("right = ", right, "left = ", left)
    // console.log(Array.from(right.matchAll("x")).length, Array.from(left.matchAll("x")))
}
function main() {
    let s = "xaxbbbxx"
    console.log(anagram(s));
}
if (require.main === module) {
    main();
}