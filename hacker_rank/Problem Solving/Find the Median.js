// https://www.hackerrank.com/challenges/find-the-median/problem?isFullScreen=true&h_r=next-challenge&h_v=zen
function findMedian(arr) {
    
    let mid = ~~(arr.length / 2)
    arr.sort((a, b) => { return a - b })
    return arr[mid]

}
function main() {
    let arr = [
        0, 1, 2, 4,
        6, 5, 3
      ];
    console.log(findMedian(arr));
}
if (require.main === module) {
    main();
}