// https://www.codewars.com/kata/576757b1df89ecf5bd00073b/train/javascript
function towerBuilder(nFloors) {
    let x = "*";
    let y = "**";
    let answer = ["*"]
    for (let i = 1; i < nFloors; i++) {
        x += y;
        answer.push(x);
    }
    answer = answer.reverse();
    let l = answer[0].length;
    for (let i = 0; i < answer.length; i++) {
        answer[i] = answer[i].padEnd(l - i, " ");
        answer[i] = answer[i].padStart(l, " ");
    }
    return answer.reverse();
  }
function main() {
    let nFloors = 10;
    console.log(towerBuilder(nFloors));
}
if (require.main === module) {
    main();
}