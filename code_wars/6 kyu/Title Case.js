// https://www.codewars.com/kata/5202ef17a402dd033c000009/train/javascript

function titleCase(title, minorWords) {
    var minorWords = typeof minorWords !== 'undefined' ? minorWords.toLowerCase().split(' ') : [];
    return title
        .toLowerCase()
        .split(' ')
        .map(function (v, i) {
            if (v != '' && (minorWords.indexOf(v) === -1 || i == 0)) {
                v = v.split('');
                v[0] = v[0].toUpperCase();
                v = v.join('');
            }
            return v;
        })
        .join(' ');
}

function main() {
    let title = 'aasd clash of kings';
    let minorWords = 'a of';
    console.log(titleCase(title, minorWords));
}
if (require.main === module) {
    main();
}
