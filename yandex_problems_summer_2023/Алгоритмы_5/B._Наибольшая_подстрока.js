const solution = (/* str */ n, k, string, QQ) => {
    // let [params, string] = str.trim().split('\n');
    // string = string.trim();
    // let [n, k] = params.trim().split(' ');
    // n = +n;
    // k = +k;
    console.log('Expected', QQ, 'k=', k);

    let maxL = 0;

    const search = (str) => {
        const totalMap = new Map();
        for (const char of str)
            totalMap.has(char) ? totalMap.set(char, totalMap.get(char) + 1) : totalMap.set(char, 1);
        const badSymbols = Array.from(totalMap.entries())
            .filter((v) => v[1] < k)
            .map((v) => v[0]);

        let prevInd = 0;
        const subStr = [];
        let string = str;
        for (let i in str) {
            const char = str[i];
            if (badSymbols.includes(char)) {
                const leftSlice = str.slice(prevInd, i);
                if (leftSlice.length >= k) subStr.push(leftSlice);
                prevInd = +i + 1;
            }
        }
        const lastSlice = str.slice(prevInd);
        if (lastSlice.length >= k) subStr.push(lastSlice);

        if (badSymbols.length === 0 && str.length > maxL) maxL = str.length;
        else for (sub of subStr) if (sub.length > maxL) search(sub);
    };

    search(string);

    return maxL;
};

function main() {
    // console.log(solution(5, 3, 'aaabb', 3));
    // console.log(solution(6, 2, 'ababbc', 5));
    // console.log(solution(5, 3, 'absaaa', 3));
    console.log(solution(18, 3, 'dabababdedabababdd', 9));
    console.log(solution(21, 3, 'aaabbbbbbbbbcccdeeedd', 21));
    console.log(solution(16, 3, 'abababdedabababd', 6));
    console.log(solution(4, 2, 'abce', 0));
    console.log(solution(17, 2, 'aaabccccdeeeebfff', 4));
    console.log(solution(6, 2, 'abaccc', 3));
    console.log(solution(10, 2, 'caaabaaaad', 4));
    console.log(solution(1, 1, 'f', 1));
    console.log(solution(2, 1, 'fd', 2));
    console.log(solution(10, 10, 'ffffffffff', 10));
    console.log(solution(10, 10, 'ffffffzfff', 0));
    console.log(solution(10, 1, 'qwertyuiop', 10));
    console.log(solution(10, 1, 'qqwweerrtt', 10));
    console.log(solution(18, 3, 'qweqwertyrtyuiouio', 0));
    console.log(solution(21, 3, 'qweqwertyrtyuiouioqwe', 0));
    console.log(solution(21, 3, 'qweqweqwertyrtyuiouio', 9));
    console.log(solution(2, 2, 'fd', 0));
    console.log(solution(2, 2, 'ff', 2));
    console.log(solution(8, 2, 'ffgdfhjt', 2));
    console.log(solution(10, 2, 'ffffdhhhhh', 5));
    console.log(solution(10, 2, 'qwfffffhzx', 5));
    console.log(solution(10, 2, 'qwfffffhzx', 5));
    console.log(solution(2, 2, 'qq', 2));
    console.log(solution(3, 2, 'qqe', 2));
    console.log(solution(3, 2, 'qqewww', 3));
    console.log(solution(15, 2, 'qqewwwterererer', 8));
    console.log(solution(14, 2, 'qqewwwerererer', 14));
}
if (require.main === module) {
    main();
}
