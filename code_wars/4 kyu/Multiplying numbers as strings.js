// https://www.codewars.com/kata/55911ef14065454c75000062/train/javascript

function zeroTrimStart(string) {
    let str = string;
    while (str[0] === '0') str = str.slice(1);
    return str;
}

function searchZeroEnd(string) {
    let str = string.split('').reverse().join('');
    let zeroes = 0;
    while (str[0] === '0') {
        str = str.slice(1);
        zeroes++;
    }
    str = str.split('').reverse().join('');
    return [str, zeroes];
}

function multiply(a, b) {
    if (Number(a) === 0 || Number(b) === 0) return '0';
    let answer = '';
    let zeroes = 0;
    a = zeroTrimStart(a);
    b = zeroTrimStart(b);
    [a, zeroes] = searchZeroEnd(a);
    answer += ''.padEnd(zeroes, '0');
    [b, zeroes] = searchZeroEnd(b);
    answer += ''.padEnd(zeroes, '0');
    const max = a.length >= b.length ? a : b;
    const min = b.length <= a.length ? b : a;
    const matrix = Array(Math.max(a.length, b.length))
        .fill(0)
        .map((v) => Array(a.length + b.length).fill(0));

    for (let i = max.length - 1; i >= 0; i--) {
        let rest = 0;
        for (let g = min.length - 1; g >= 0; g--) {
            let x = max[i] * min[g];
            x = x
                .toString()
                .split('')
                .map((v) => Number(v));
            if (x.length === 1) {
                matrix[i][Number(i) + Number(g) + 1] += x[0] + rest;
                rest = 0;
            } else {
                let y = matrix[i][Number(i) + Number(g) + 1] + x[1] + rest;
                y = y
                    .toString()
                    .split('')
                    .map((v) => Number(v));
                if (y.length === 1) {
                    matrix[i][Number(i) + Number(g) + 1] = y[0];
                    rest = x[0];
                } else {
                    matrix[i][Number(i) + Number(g) + 1] = y[1];
                    rest = x[0] + y[0];
                }
            }
        }
        matrix[i][i] += rest;
    }
    const arrAnswer = Array(a.length + b.length).fill(0);

    for (let i = matrix[0].length - 1; i >= 0; i--) {
        let x = 0;
        for (let g in matrix) {
            x += matrix[g][i];
        }
        x += arrAnswer[i];
        x = x
            .toString()
            .split('')
            .map((v) => Number(v));
        if (x.length === 1) {
            arrAnswer[i] = x[0];
        } else if (x.length === 2) {
            arrAnswer[i] = x[1];
            arrAnswer[i - 1] += x[0];
        } else {
            arrAnswer[i] = x[2];
            arrAnswer[i - 1] += x[1];
            arrAnswer[i - 2] += x[0];
        }
    }
    return zeroTrimStart(arrAnswer.join('')) + answer;
}

function main() {
    let a = '58608473622772837728372827';
    let b = '7586374672263726736374';
    console.log(multiply(a, b));
}
if (require.main === module) {
    main();
}

// 4, 4, 4, 6, 2, 5, 8, 3, 9, 8, 7,
//   1, 8, 4, 0, 5, 6, 0, 0, 2, 4, 4,
//   8, 9, 1, 7, 5, 4, 2, 4, 3, 1, 6,
//   2, 0, 5, 5, 6, 6, 2, 1, 4, 1, 0,
//   9, 2, 9, 8
// 444625839871840560024489175424316205566214109298
