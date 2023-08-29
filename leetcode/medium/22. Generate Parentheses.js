// https://leetcode.com/problems/generate-parentheses/

var generateParenthesis = function (n) {
    const result = [];

    generate(n, n, '');

    function generate(open, close, output) {
        if (open === 0 && close === 0) {
            result.push(output);
            return;
        }

        if (open > 0) {
            generate(open - 1, close, output + '(');
        }

        if (close > open) {
            generate(open, close - 1, output + ')');
        }
    }

    return result;
};

function main() {
    console.log(generateParenthesis(3));
}
if (require.main === module) {
    main();
}

//["()"]

//["()()", "(())"]
