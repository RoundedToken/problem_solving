// https://www.codewars.com/kata/59c633e7dcc4053512000073/train/javascript

function solve(s) {
    return s
        .split(/[aeiou]/)
        .filter((v2) => v2 !== '')
        .map((v) =>
            v.split('').reduce((prev, curr) => (prev += Number(curr.charCodeAt()) - 96), (prev = 0))
        )
        .sort((a, b) => b - a)[0];
}

function main() {
    const s = 'zqodiacsq';
    console.log(solve(s));
}
if (require.main === module) {
    main();
}

// Test.assertEquals(solve("zodiac"),26);
// Test.assertEquals(solve("chruschtschov"),80);
// Test.assertEquals(solve("khrushchev"),38);
// Test.assertEquals(solve("strength"),57);
// Test.assertEquals(solve("catchphrase"),73);
// Test.assertEquals(solve("twelfthstreet"),103);
// Test.assertEquals(solve("mischtschenkoana"),80);
