// https://www.codewars.com/kata/51e0007c1f9378fa810002a9/train/javascript

// Return the output array, and ignore all non-op characters
function parse(data) {
    const answer = [];
    let value = 0;
    data.split('').forEach((v) => {
        if (v === 'i') {
            value += 1;
        } else if (v === 'd') {
            value -= 1;
        } else if (v === 's') {
            value **= 2;
        } else if (v === 'o') {
            answer.push(value);
        }
    });
    return answer;
}

function main() {
    let data = 'iiisdoso';
    console.log(parse(data));
}
if (require.main === module) {
    main();
}

//parse("iiisdoso") => [ 8, 64 ]
