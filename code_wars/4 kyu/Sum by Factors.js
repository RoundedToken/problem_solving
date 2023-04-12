//https://www.codewars.com/kata/54d496788776e49e6b00052f/train/javascript

function primeFactors(lst) {
    const factors = {};

    for (let n of lst) {
        const num = n;
        if (n < 0) n *= -1;
        let divisor = 2;
        const flag = {};
        while (n >= 2) {
            if (n % divisor == 0) {
                if (factors[divisor] !== undefined && flag[divisor] === undefined) {
                    factors[divisor] += num;
                    flag[divisor] = '1';
                    if (divisor === 17) console.log(num, n, factors[divisor]);
                } else if (factors[divisor] === undefined) {
                    factors[divisor] = num;
                    flag[divisor] = '1';
                    if (divisor === 17) console.log(num, n, factors[divisor]);
                }
                n = n / divisor;
            } else {
                divisor++;
            }
        }
    }
    return factors;
}

function sumOfDivided(lst) {
    const primes = primeFactors(lst);
    return Object.entries(primes).map((v) => v.map((v2) => Number(v2)));
}

function main() {
    const lst = [-73, 86, 3, 140, 50, 22, 45, 50, -68, 68, -22, 152, 179, 193, -17, -38, 138];
    console.log(sumOfDivided(lst));
}
if (require.main === module) {
    main();
}

// testing([12, 15], [ [2, 12], [3, 27], [5, 15] ]);
//     testing([15,21,24,30,45], [ [2, 54], [3, 135], [5, 90], [7, 21] ]);
