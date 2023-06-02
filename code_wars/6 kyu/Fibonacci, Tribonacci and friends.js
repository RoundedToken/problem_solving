// https://www.codewars.com/kata/556e0fccc392c527f20000c5/train/javascript

function Xbonacci(signature, n) {
    const l = signature.length;

    if (n <= l) return signature.slice(0, n);

    for (let i = l; i < n; i++) {
        console.log(i);
        console.log(signature.slice(i - l, i));
        signature[i] = signature.slice(i - l, i).reduce((prev, curr) => (prev += curr), (prev = 0));
    }

    return signature;
}

function main() {
    const signature = [18, 15, 7, 6, 7, 6, 9, 16, 12, 2, 12, 1];
    const n = 10;
    console.log(Xbonacci(signature, n));
}
if (require.main === module) {
    main();
}

// Test.assertSimilar(Xbonacci([0,1],10),[0,1,1,2,3,5,8,13,21,34]);
// Test.assertSimilar(Xbonacci([1,1],10),[1,1,2,3,5,8,13,21,34,55]);
// Test.assertSimilar(Xbonacci([0,0,0,0,1],10),[0,0,0,0,1,1,2,4,8,16]);
// Test.assertSimilar(Xbonacci([1,0,0,0,0,0,1],10),[1,0,0,0,0,0,1,2,3,6]);
