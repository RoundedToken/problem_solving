const solution = (input) => {
    let [n, s] = input.trim().split('\n');
    n = Number(n);
    s = s.trim();
    const result = [];

    const prefix = [BigInt(s[0].charCodeAt())];
    const suffix = [BigInt(s[s.length - 1].charCodeAt())];
    const x = [BigInt(1)];
    const mod = BigInt(100000000000007);
    const X = BigInt(257);

    for (let i = 1; i < s.length; i++) {
        prefix[i] = (prefix[i - 1] * X + BigInt(s[i].charCodeAt())) % mod;
        x[i] = (x[i - 1] * X) % mod;
    }

    for (let i = s.length - 2; i >= 0; i--) {
        suffix.push((suffix.at(-1) * X + BigInt(s[i].charCodeAt())) % mod);
    }

    function isTrue(currentInd, l) {
        return (
            (prefix[l - 1] + (suffix[n - currentInd - 2] ?? BigInt(0)) * (x[l] ?? BigInt(0))) %
                mod ===
            suffix[n - currentInd - 1 + l - 1] % mod
        );
    }

    for (let i = 0; i < s.length; i++) {
        let start = 1;
        let end = i + 1;

        while (start <= end) {
            const mid = Math.floor((start + end) / 2);

            if (isTrue(i, mid)) {
                start = mid + 1;
            } else {
                end = mid - 1;
            }
        }

        result.push(end);
    }

    return result.join(' ');
};

function main() {
    console.log(
        solution(`5
    BBABB`)
    );
    console.log(
        solution(`49
    burannarubabyrrybaglipspiritmatankollokvzumbboyus`)
    );
}
if (require.main === module) {
    main();
}
