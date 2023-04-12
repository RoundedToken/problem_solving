//https://www.codewars.com/kata/52b757663a95b11b3d00062d/train/javascript

function toWeirdCase(string) {
    return string
        .split(' ')
        .map((word) =>
            word
                .split('')
                .map((verb, i) => (i % 2 ? verb.toLowerCase() : verb.toUpperCase()))
                .join('')
        )
        .join(' ');
}

function main() {
    let string = 'String abs';
    console.log(toWeirdCase(string));
}
if (require.main === module) {
    main();
}
