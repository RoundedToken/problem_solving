// https://www.codewars.com/kata/5274e122fc75c0943d000148/train/javascript

function groupByCommas(n) {
    return n
        .toString()
        .split('')
        .reverse()
        .reduce((prev, curr, ind) => {
            if (ind % 3 === 0 && ind !== 0) prev.push(',');
            prev.push(curr);
            return prev;
        }, (prev = []))
        .reverse()
        .join('');
}

function main() {
    console.log(groupByCommas(1), '1');
    console.log(groupByCommas(10), '10');
    console.log(groupByCommas(100), '100');
    console.log(groupByCommas(1000), '1,000');
    console.log(groupByCommas(10000), '10,000');
    console.log(groupByCommas(100000), '100,000');
    console.log(groupByCommas(1000000), '1,000,000');
    console.log(groupByCommas(35235235), '35,235,235');
}
if (require.main === module) {
    main();
}
