// https://www.hackerrank.com/challenges/game-of-thrones/problem?isFullScreen=true&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen
function gameOfThrones(s) {
    let flag = true;
    let count = 0;
    let SET = new Set(Array.from(s));
    SET.forEach((val) => {
        let x = Array.from(s.matchAll(val)).length;
        if (x % 2 == 0) count++;
        else if (flag) {
            flag = false;
            count++;
        }
    })
    //console.log(SET.size, count);
    if (count == SET.size) return "YES"
    else return "NO"

}
function main() {
    let s = "aabbccddad";
    console.log(gameOfThrones(s));
}
if (require.main === module) {
    main();
}