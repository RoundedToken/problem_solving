// https://www.codewars.com/kata/5270d0d18625160ada0000e4/train/javascript
function score(dice) {
    let answer = 0;
    let map = new Map();
    for (let i of dice) {
        if (map.has(i)) map.set(i, map.get(i) + 1);
        else map.set(i, 1);
    }
    map.forEach((val, key) => {
        if (key == 2) answer += Math.floor(val / 3) * 200;
        if (key == 3) answer += Math.floor(val / 3) * 300;
        if (key == 4) answer += Math.floor(val / 3) * 400;
        if (key == 6) answer += Math.floor(val / 3) * 600;
        if (key == 1) {
            answer += (val % 3) * 100;
            answer += Math.floor(val / 3) * 1000;
        }
        if (key == 5) {
            answer += (val % 3) * 50;
            answer += Math.floor(val / 3) * 500;
        }
    })
    return answer
}
function main() {
    let dice = [2, 4, 4, 5, 4];
    console.log(score(dice));
}
if (require.main === module) {
    main();
}