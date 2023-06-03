// https://www.codewars.com/kata/58d76854024c72c3e20000de/train/javascript

function reverse(str) {
    return str
        .split(' ')
        .map((word, ind) => {
            if (ind % 2) return word.split('').reverse().join('');
            return word;
        })
        .join(' ')
        .trim();
}

function main() {
    console.log(reverse('Hello world!'));
}
if (require.main === module) {
    main();
}
