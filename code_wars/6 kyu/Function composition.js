// https://www.codewars.com/kata/5655c60db4c2ce0c2e000026/train/javascript

const addOne = (a) => a + 1;
const multTwo = (b) => b * 2;

function compose(...funcs) {
    return function (initial) {
        return funcs.reduceRight((prev, curr) => curr(prev), initial);
    };
}

function main() {
    console.log(compose(addOne, multTwo)(3));
}
if (require.main === module) {
    main();
}
