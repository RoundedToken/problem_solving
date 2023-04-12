// https://www.codewars.com/kata/56b5afb4ed1f6d5fb0000991/train/javascript

function revrot(str, sz) {
    if (sz <= 0 || str === '' || sz > str.length) return '';

    const arr = [];
    for (let i = 0; i < str.length; i += sz) {
        const slice = str.slice(i, i + sz);
        if (slice.length === sz) arr.push(slice);
    }

    return arr
        .map((v, i) => {
            const s = v.split('').reduce((prev, cur) => (prev += cur ** 2), (prev = 0));
            if (s % 2) {
                return v.slice(1) + v[0];
            } else return v.split('').reverse().join('');
        })
        .join('');
}

function main() {
    const str = '123456987654';
    const sz = 6;
    console.log(revrot(str, sz));
}
if (require.main === module) {
    main();
}

// revrot("123456987654", 6) --> "234561876549"
// revrot("123456987653", 6) --> "234561356789"
// revrot("66443875", 4) --> "44668753"
// revrot("66443875", 8) --> "64438756"
// revrot("664438769", 8) --> "67834466"
// revrot("123456779", 8) --> "23456771"
// revrot("", 8) --> ""
// revrot("123456779", 0) --> ""
// revrot("563000655734469485", 4) --> "0365065073456944"
