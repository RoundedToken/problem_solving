// https://www.codewars.com/kata/5629db57620258aa9d000014/train/javascript

function parse(str, letters) {
    const count = {};
    str.split('').forEach((v) => {
        if (/[a-z]/.test(v)) {
            if (count[v]) count[v]++;
            else count[v] = 1;
        }
    });
    return Object.fromEntries(
        Array.from(Object.entries(count)).filter((v) => {
            if (v[1] !== 1) {
                if (!letters.includes(v[0])) letters.push(v[0]);
                return v;
            }
        })
    );
}

function combine(obj1, obj2, letters) {
    const values = { 1: 2, 2: 1, '=': 0 };
    return letters
        .map((v) => {
            if (obj1[v] > obj2[v] || obj2[v] === undefined) return `1:${v.repeat(obj1[v])}`;
            else if (obj2[v] > obj1[v] || obj1[v] === undefined) return `2:${v.repeat(obj2[v])}`;
            else return `=:${v.repeat(obj1[v])}`;
        })
        .sort((a, b) => {
            if (a.length > b.length) return -1;
            else if (b.length > a.length) return 1;
            else {
                if (values[a[0]] > values[b[0]]) return -1;
                else if (values[b[0]] > values[a[0]]) return 1;
                else {
                    if (a[2] > b[2]) return 1;
                    else if (b[2] > a[2]) return -1;
                    return 0;
                }
            }
        })
        .join('/');
}

function mix(s1, s2) {
    const allLetters = [];
    const count1 = parse(s1, allLetters);
    const count2 = parse(s2, allLetters);
    return combine(count1, count2, allLetters);
}

function main() {
    const s1 = 'my&friend&Paul has heavy hats! &';
    const s2 = 'my friend John has many many friends &';
    console.log(mix(s1, s2));
}
if (require.main === module) {
    main();
}

// s1 = "my&friend&Paul has heavy hats! &"
// s2 = "my friend John has many many friends &"
// mix(s1, s2) --> "2:nnnnn/1:aaaa/1:hhh/2:mmm/2:yyy/2:dd/2:ff/2:ii/2:rr/=:ee/=:ss"

// s1 = "mmmmm m nnnnn y&friend&Paul has heavy hats! &"
// s2 = "my frie n d Joh n has ma n y ma n y frie n ds n&"
// mix(s1, s2) --> "1:mmmmmm/=:nnnnnn/1:aaaa/1:hhh/2:yyy/2:dd/2:ff/2:ii/2:rr/=:ee/=:ss"

// s1="Are the kids at home? aaaaa fffff"
// s2="Yes they are here! aaaaa fffff"
// mix(s1, s2) --> "=:aaaaaa/2:eeeee/=:fffff/1:tt/2:rr/=:hh"
