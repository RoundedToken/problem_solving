//https://www.codewars.com/kata/587731fda577b3d1b0001196/train/javascript

String.prototype.camelCase = function () {
    return this.split(' ')
        .map((word) =>
            word
                .split('')
                .map((verb, i) => (i === 0 ? verb.toUpperCase() : verb.toLowerCase()))
                .join('')
        )
        .join('');
};

function main() {
    console.log('asv asd'.camelCase());
}
if (require.main === module) {
    main();
}
