// https://leetcode.com/problems/valid-parenthesis-string/

var checkValidString = function (s) {
    let open = 0;
    let close = 0;

    for (const char of s) {
        if (char === ')') open--;
        else open++;

        if (open < 0) return false;
    }

    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] === '(') close--;
        else close++;

        if (close < 0) return false;
    }

    return true;
};

function main() {
    console.log(checkValidString('(())'));
}
if (require.main === module) {
    main();
}
