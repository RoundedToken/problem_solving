// https://www.codewars.com/kata/5659c6d896bc135c4c00021e/train/javascript

function nextSmaller(n) {
    n = n.toString().split('');
    console.log(n);
    for (let i = n.length - 2; i >= 0; i--) {
        for (let g = n.length - 1; g > i; g--) {
            if (n[i] > n[g]) {
                let x = n[i];
                n[i] = n[g];
                n[g] = x;
                n = n
                    .slice(0, i + 1)
                    .concat(n.slice(i + 1).sort((a, b) => b - a))
                    .join('');
                if (n[0] === '0') continue;
                else return Number(n);
            }
        }
    }
    return -1;
}

function main() {
    let n = 51226262651257;
    // 51226262651257
    // 51226262627551;
    // 51226262576521;

    // 51226262621575
    console.log(nextSmaller(n));
}
if (require.main === module) {
    main();
}

// Test.assertEquals(nextSmaller(21), 12)
//  		Test.assertEquals(nextSmaller(907), 790)
// 		Test.assertEquals(nextSmaller(531), 513)
// 		Test.assertEquals(nextSmaller(135), -1)
// 		Test.assertEquals(nextSmaller(2071), 2017)
// 		Test.assertEquals(nextSmaller(1027), -1)
// 		Test.assertEquals(nextSmaller(414), 144)
