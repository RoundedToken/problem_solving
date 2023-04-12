// https://www.hackerrank.com/challenges/largest-permutation/problem?isFullScreen=true&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen
function largestPermutation(k, arr) {
    let l = arr.length;
    let biggest = l;

    for (let i = 0; i < l; i++) {
        if (arr[i] != biggest) {
            let index = arr.indexOf(biggest);
            let x = arr[i];
            arr[i] = arr[index];
            arr[index] = x;
            k--;
        }
        biggest--;
        if (k == 0) break
    }
    return arr
}
function main() {
    let arr = [1, 2, 3, 4, 8, 7, 6, 5];
    //arr =  [7 , 8, 2, 3, 4, 6, 5, 1]
    let k = 3;
    console.log(largestPermutation(k, arr));
}
if (require.main === module) {
    main();
}