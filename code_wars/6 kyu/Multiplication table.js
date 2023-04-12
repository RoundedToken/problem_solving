// https://www.codewars.com/kata/534d2f5b5371ecf8d2000a08/train/javascript

multiplicationTable = function (size) {
    return Array(size)
        .fill()
        .map((_, row) =>
            Array(size)
                .fill()
                .map((_, col) => (col + 1) * (row + 1))
        );
};

function main() {
    const size = 3;
    console.log(multiplicationTable(size));
}
if (require.main === module) {
    main();
}
