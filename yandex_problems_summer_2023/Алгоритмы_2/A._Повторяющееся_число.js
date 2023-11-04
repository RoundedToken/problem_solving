const reapeatingNumber = (k, arr) => {
    const uniq = new Map()

    for (let i in arr) {
        if (uniq.has(arr[i]) && (+i - uniq.get(arr[i]) <= k)) return 'YES'
        else uniq.set(arr[i], +i)
    }

    return 'NO'
}

function main() {
    console.log(reapeatingNumber(2, [1, 2, 3, 1]));
    console.log(reapeatingNumber(1, [1, 0, 1, 1]));
    console.log(reapeatingNumber(2, [1, 2, 3, 1, 2, 3]));
    console.log(reapeatingNumber('1', []));
}
if (require.main === module) {
    main();
}