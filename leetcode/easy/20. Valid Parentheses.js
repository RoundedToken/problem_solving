// https://leetcode.com/problems/valid-parentheses/

var isValid = function (s) {
    const pairs = { '(': ')', '{': '}', '[': ']' };
    const set = new Set(Object.entries(pairs).flat());
    const stack = [];

    for (const char of s) {
        if (set.has(char)) {
            if (char in pairs) stack.push(char);
            else {
                const last = stack.pop();

                if (char !== pairs[last]) return false;
            }
        }
    }

    return stack.length === 0 ? true : false;
};

function main() {
    console.log(isValid('()'));
}
if (require.main === module) {
    main();
}
