// https://www.codewars.com/kata/585d7d5adb20cf33cb000235/train/javascript
function findUniq(arr) {
    while (arr.length > 1) {
        for (let i in arr) {
            if (arr.slice(Number(i) + 1).includes(arr[i])) {
                arr = arr.filter((val) => val != arr[i]);
                break
            } else return arr[i]
        }
    }
    return arr[0]
  }
function main() {
    let arr = [
        0, 1, 1, 1,
        1, 1, 1, 1
      ];
    console.log(findUniq(arr));
}
if (require.main === module) {
    main();
}
// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55