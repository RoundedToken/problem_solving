// https://www.codewars.com/kata/514b92a657cdc65150000006/train/javascript
function solution(number) {
    if (number < 1) return 0;
    let sum = 0;
    for (let i = 1; i < number; i++) {
        if (i % 3 == 0) sum += i;
        else if (i % 5 == 0) sum += i;
    }
    return sum
}
function main() {
    let number = 10
    console.log(solution(number));
}
if (require.main === module) {
    main();
}