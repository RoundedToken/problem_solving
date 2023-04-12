// https://www.codewars.com/kata/5727bb0fe81185ae62000ae3/train/javascript

function cleanString(s) {
    const result = [];
    s.split('').forEach((v) => (v === '#' ? result.pop() : result.push(v)));
    return result.join('');
}

function main() {
    const s = 'abc#d##c';
    console.log(cleanString(s));
}
if (require.main === module) {
    main();
}

//   "abc#d##c"      ==>  "ac"
// "abc##d######"  ==>  ""
// "#######"       ==>  ""
// ""              ==>  ""
