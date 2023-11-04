const buildingStairs = (n) => {
    let stairs = 0;
    while (n >= stairs + 1) {
        n -= stairs + 1;
        stairs++;
    }

    return stairs;
};

function main() {
    console.log(buildingStairs(2 ** 31 - 1));
}
if (require.main === module) {
    main();
}
