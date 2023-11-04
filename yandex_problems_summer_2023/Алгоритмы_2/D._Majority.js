const majority = (arr) => {
    const stack = [];

    for (let n of arr) {
        const l = stack.length;

        if (l === 0 || stack[l - 1] === n) stack.push(n);
        else stack.pop();
    }

    return stack[0];
};

function main() {
    console.log(majority([1, 2, 1]));
    console.log(majority([7, 5, 5, 5, 5, 4, 5]));
    console.log(majority([3, 3, 3, 1]));
}
if (require.main === module) {
    main();
}
