// https://www.codewars.com/kata/54a2e93b22d236498400134b/train/javascript

function presses(phrase) {
    const buttons = ['1', 'abc2', 'def3', 'ghi4', 'jkl5', 'mno6', 'pqrs7', 'tuv8', 'wxyz9', ' 0'];
    return phrase
        .split('')
        .reduce(
            (prev, curr) =>
                (prev +=
                    1 +
                    buttons
                        .find((button) => button.includes(curr.toLowerCase()))
                        .indexOf(curr.toLowerCase())),
            (prev = 0)
        );
}

function main() {
    const phrase = 'HOW R U';
    console.log(presses(phrase));
}
if (require.main === module) {
    main();
}

// Test.assertEquals(presses("LOL"), 9, "should work for simple examples")
// Test.assertEquals(presses("HOW R U"), 13, "should work for phrases with spaces")
