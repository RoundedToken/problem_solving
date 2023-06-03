// https://www.codewars.com/kata/546dba39fa8da224e8000467/train/javascript

var runLengthEncoding = function (str) {
    return str.split('').reduce((prev, curr) => {
        if (prev.length > 0 && curr === prev.at(-1)[1]) {
            console.log(prev[1]);
            prev.at(-1)[0]++;
            return [...prev];
        } else return [...prev, [1, curr]];
    }, (prev = []));
};

function main() {
    console.log(runLengthEncoding('aaab'));
}
if (require.main === module) {
    main();
}
