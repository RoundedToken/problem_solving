const solution = (input) => {
    const n = Number(input);
    // const str = Array(n)
    //     .fill()
    //     .map((_, i) => i + 1)
    //     .join('');

    // if (str.length === 1) {
    //     return str;
    // }

    return perms(n).join('\n');
};

function perms(n) {
    const result = [];

    function d(arr = []) {
        if (arr.length === n) {
            result.push(arr.join(''));
            return;
        }

        for (let i = 1; i <= n; i++) {
            if (!arr.includes(i)) {
                arr.push(i);
                d(arr);
                arr.pop();
            }
        }
    }

    d();

    return result;
}

function main() {
    console.log(solution('3'));
}
if (require.main === module) {
    main();
}
