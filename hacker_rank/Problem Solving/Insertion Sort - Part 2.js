// https://www.hackerrank.com/challenges/insertionsort2/problem?isFullScreen=true&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen
function insertionSort2(n, arr) {
    for (let i = 1; i < n; i++) {
        let temp = arr[i];
        let j = i - 1;
        while (j >= 0, arr[j] > temp) {
            arr[j + 1] = arr[j];
            j--
        }
        arr[j + 1] = temp;
        console.log(...arr)
    }
}
function main() {
    let n = 4;
    let arr = [1, 4, 3, 2]
    console.log(insertionSort2(n, arr));
}
if (require.main === module) {
    main();
}