function gcd(a, b) {
    if (b === 0) return a;
    return gcd(b, a % b);
}

function lcm(a, b) {
    return (a * b) / gcd(a, b);
}

const summ = (input) => {
    let [a, b, c, d] = input.trim().split(' ');
    a = Number(a);
    b = Number(b);
    c = Number(c);
    d = Number(d);

    let n = lcm(b, d);

    let m = (a * d) / gcd(b, d) + (c * b) / gcd(b, d);

    let k = gcd(m, n);

    m /= k;
    n /= k;

    return [m, n].join(' ');
};

function main() {
    console.log(summ(`1 2 1 2`));
    console.log(summ(`3 3 2 5`));
}
if (require.main === module) {
    main();
}
