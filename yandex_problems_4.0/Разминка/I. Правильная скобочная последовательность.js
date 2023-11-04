const isValid = (str) => {
    const dic = { '(': ')', '[': ']', '{': '}' };
    const isOpen = new Set(Object.keys(dic));
    const stack = [];

    for (const char of str) {
        if (isOpen.has(char)) {
            stack.push(char);
        } else if (dic[stack.pop()] !== char) {
            return 'no';
        }
    }

    return stack.length === 0 ? 'yes' : 'no';
};

function main() {
    console.log(isValid('({[]()})'));
    console.log(isValid('([)]'));
    console.log(isValid('('));
    console.log(isValid(''));
}
if (require.main === module) {
    main();
}
