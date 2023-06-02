// https://www.codewars.com/kata/54129112fb7c188740000162/train/javascript

function prefill(n, v) {
    if (!Number.isInteger(Number(n)) || n < 0 || typeof n == 'boolean')
        throw TypeError(`${n} is invalid`);

    const arr = [];

    for (let i = 0; i < n; i++) {
        arr.push(v);
    }

    return arr;
}

function main() {
    const n = 3;
    const v = 1;

    console.log(prefill(3, prefill(true, '2d')));
}
if (require.main === module) {
    main();
}

// prefill(3,1) --> [1,1,1]

//     prefill(2,"abc") --> ['abc','abc']

//     prefill("1", 1) --> [1]

//     prefill(3, prefill(2,'2d'))
//       --> [['2d','2d'],['2d','2d'],['2d','2d']]

//     prefill("xyz", 1)
//       --> throws TypeError with message "xyz is invalid"
