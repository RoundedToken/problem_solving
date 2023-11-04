const colorfulSticks = (str) => {
    let count = new Map([
        ['0', ''],
        ['1', ''],
        ['2', ''],
        ['3', ''],
        ['4', ''],
        ['5', ''],
        ['6', ''],
        ['7', ''],
        ['8', ''],
        ['9', ''],
    ]);

    for (let i = 1; i < str.length; i += 2) {
        const n = str[i];
        const val = count.get(n);
        const color = str[i - 1];
        const newVal = val + color;

        if (!count.has(n)) continue;

        if (val.includes(color)) continue;

        if (newVal.length === 3) count.delete(n);
        else count.set(n, newVal);

        if (count.size === 0) break;
    }

    return 10 - count.size;
};

function main() {
    console.log(colorfulSticks('R2G1R1B2G2'));
    console.log(colorfulSticks('R9G1B0'));
}
if (require.main === module) {
    main();
}
