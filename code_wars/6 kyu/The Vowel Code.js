// https://www.codewars.com/kata/53697be005f803751e0015aa/train/javascript

function encode(string) {
    const crypt = new Map([
        ['a', '1'],
        ['e', '2'],
        ['i', '3'],
        ['o', '4'],
        ['u', '5'],
    ]);
    return string
        .split('')
        .map((v) => (crypt.has(v) ? crypt.get(v) : v))
        .join('');
}

function decode(string) {
    const crypt = new Map([
        ['1', 'a'],
        ['2', 'e'],
        ['3', 'i'],
        ['4', 'o'],
        ['5', 'u'],
    ]);
    return string
        .split('')
        .map((v) => (crypt.has(v) ? crypt.get(v) : v))
        .join('');
}

function main() {
    const string = 'Th3s 3s 1n 2nc4d3ng t2st.';
    console.log(decode(string));
}
if (require.main === module) {
    main();
}
//   a -> 1
// e -> 2
// i -> 3
// o -> 4
// // u -> 5
// assert.equal(encode('hello'), 'h2ll4');
// assert.equal(encode('How are you today?'), 'H4w 1r2 y45 t4d1y?');
// assert.equal(encode('This is an encoding test.'), 'Th3s 3s 1n 2nc4d3ng t2st.');
// assert.equal(decode('h2ll4'), 'hello');
