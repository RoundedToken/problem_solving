// https://www.codewars.com/kata/5626b561280a42ecc50000d1/train/javascript
function sumDigPow(a, b) {
    let answer = [];
    for (let i = a; i <= b; i++) {
        if (i.toString().split("").reduce((t, v, ind) =>  t + Number(v) ** (ind + 1), 0 ) == i) answer.push(i);
    }
    return answer
  }
function main() {
    let a = 1;
    let b = 100;
    console.log(sumDigPow(a, b));
}
if (require.main === module) {
    main();
}
// 1, 10  --> [1, 2, 3, 4, 5, 6, 7, 8, 9]
// 1, 100 --> [1, 2, 3, 4, 5, 6, 7, 8, 9, 89]