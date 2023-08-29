// https://leetcode.com/problems/evaluate-reverse-polish-notation/

var evalRPN = function (tokens) {
    const stack = [];

    while (tokens.length > 0) {
        const token = tokens.shift();
        console.log(stack);
        if ('-+*/'.includes(token)) {
            const v1 = stack.pop();
            const v2 = stack.pop();

            if (token === '/') {
                console.log(Math.round(v2 / v1));
                stack.push(Math.round(v2 / v1));
            } else stack.push(eval(`${v1} ${token} ${v2}`));
        } else {
            stack.push(token);
        }
    }

    return stack[0];
};

function main() {
    console.log(evalRPN(['10', '6', '9', '3', '+', '-11', '*', '/', '*', '17', '+', '5', '+']));
    console.log(evalRPN(['4', '13', '5', '/', '+']));
}
if (require.main === module) {
    main();
}
