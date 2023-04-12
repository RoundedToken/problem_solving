// https://www.codewars.com/kata/54da5a58ea159efa38000836/train/javascript
function findOdd(A) {
    let count = new Map();
    for (let i of A) {
        if (count.has(i)) count.set(i, count.get(i) + 1);
        else count.set(i, 1);
    }
    for (let key of count.keys()) {
        if (count.get(key) % 2) return key
    }
  }
function main() {
    let A = [20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5];
    console.log(findOdd(A));
}
if (require.main === module) {
    main();
}