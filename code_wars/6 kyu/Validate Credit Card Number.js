// https://www.codewars.com/kata/5418a1dd6d8216e18a0012b2/train/javascript

function validate(n) {
    return (
        n
            .toString()
            .split('')
            .reverse()
            .reduce(
                (prev, curr, ind) =>
                    ind % 2 === 0
                        ? (prev += Number(curr))
                        : Number(curr) * 2 > 9
                        ? (prev += Number(curr) * 2 - 9)
                        : (prev += Number(curr) * 2),
                (prev = 0)
            ) %
            10 ===
        0
    );
}

function main() {
    const n = 1230;
    console.log(validate(n));
}
if (require.main === module) {
    main();
}

// Test.assertEquals(validate(123), false);
// Test.assertEquals(validate(1), false);
// Test.assertEquals(validate(2121), true);
// Test.assertEquals(validate(1230), true);
