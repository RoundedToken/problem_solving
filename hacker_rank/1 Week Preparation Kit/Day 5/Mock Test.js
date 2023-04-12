function pairs(k, arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let g = i + 1; g < arr.length; g++) {
            if (Math.abs(arr[i] - arr[g]) == k) {
                count++;
            }
        }
    }
    return count;
}
function main() {
}
if (require.main === module) {
    main();
}