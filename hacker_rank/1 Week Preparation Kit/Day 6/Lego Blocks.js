// https://www.hackerrank.com/challenges/one-week-preparation-kit-lego-blocks/problem?h_l=interview&isFullScreen=true&playlist_slugs%5B%5D%5B%5D=preparation-kits&playlist_slugs%5B%5D%5B%5D=one-week-preparation-kit&playlist_slugs%5B%5D%5B%5D=one-week-day-six
let mod = 1000000007;
function add(a, b) {
    //return a + b
    return (a + b) % mod
}
function sub(a, b) {
    //return a - b
    //return (a - b) % mod
    return ((a % mod) - (b % mod)) % mod
}
function mult(a, b) {
    //return a * b
    return Number((BigInt(a) * BigInt(b)) % BigInt(mod)) 
    //return ((a % mod) * (b % mod)) % mod
}
function pow(a, b) {
    let z = a;
    for (let i = 1; i < b; i++) {
        z = mult(z, a);
    }
    return z 
}
function legoBlocks(n, m) {
    let P = [1];
    for (let i = 1; i <= m; i++) {
        if (i <= 4) {
            P[i] = 2 ** (i - 1);
        } else {
            P[i] = sub(mult(P[i - 1], 2), P[i - 5]);
        }
    }
    for (let i = 0; i <= m; i++) {
        P[i] = pow(P[i], n)
    }
    let S = [1];
    for (let g = 1; g <= m; g++) {
        let sum = 0;
        for (let i = 1; i <= g - 1; i++) {
            sum = add(sum, mult(S[i], P[g - i]));
        }
        S[g] = sub(P[g], sum);
    }
    return (S[m] + mod) % mod
    //return S[m] % mod
}
function main() {
    let n = 8;
    let m = 6;
    console.log(legoBlocks(n, m));
}
if (require.main === module) {
    main();
}