function pairs(k, arr) {
    let count = 0;
    let l = arr.length;
    for (let i = 0; i < l - 1; i++) {
        for (let g = i + 1; g < l; g++) {
            if (Math.abs(arr[i] - arr[g]) == k) count++;
        }
    }
    return count
}
function main() {
    let arr = [1, 5, 3, 4, 2];
    let k = 2;
    console.log(pairs(k, arr));
}
if (require.main === module) {
    main();
}