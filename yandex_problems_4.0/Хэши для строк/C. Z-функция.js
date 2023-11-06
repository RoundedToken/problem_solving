const solution = (input) => {
    input = input.trim();

    const z = Array(input.length).fill(0);

    for (let i = 1; i < input.length; i++) {
        let start = 1;
        let end = input.length - i;

        while (start <= end) {
            const mid = Math.floor((start + end) / 2);
            const prefix = input.substring(0, mid);
            const suffix = input.substring(i, i + mid);

            if (prefix === suffix) {
                start = mid + 1;
            } else {
                end = mid - 1;
            }
        }
        z[i] = end;
    }

    return z.join(' ');
};

function zFunction(s) {
    let n = s.length;
    let z = new Array(n).fill(0);

    let l = 0,
        r = 0;

    for (let i = 1; i < n; i++) {
        if (i > r) {
            l = r = i;

            while (r < n && s[r - l] == s[r]) r++;

            z[i] = r - l;
            r--;
        } else {
            let k = i - l;
            if (z[k] < r - i + 1) z[i] = z[k];
            else {
                l = i;
                while (r < n && s[r - l] == s[r]) r++;

                z[i] = r - l;
                r--;
            }
        }
    }

    return z.join(' ');
}

function main() {
    // const test = (
    //     ('alllsssowqe'.repeat(19) + 'asdssqq'.repeat(23) + 'lamsnfjxuqp'.repeat(5)).repeat(77) +
    //     'aaabbbrrrlssss'.repeat(90)
    // ).repeat(77);
    // console.log(solution(`abracadabra`));
    // console.log(solution(`aaa`));
    console.log(zFunction(`abracadabra\n`));
    // console.log(zFunction(`aaa`));
    // console.log(solution(test));
    // console.log(zFunction(test) === solution(test));
}
if (require.main === module) {
    main();
}
