// https://www.hackerrank.com/challenges/beautiful-days-at-the-movies/problem?isFullScreen=true
function beautifulDays(i, j, k) {
    let count = 0;
    function reversedNum(num) {
  return (
    parseFloat(
      num
        .toString()
        .split('')
        .reverse()
        .join('')
    ) * Math.sign(num)
  )                 
}
    for (let g = i; g <= j; g++) {
        if (Math.abs(g - reversedNum(g)) % k == 0) {
            count++;
        }
    }
    return count;
}
function main() {
}
if (require.main === module) {
    main();
}