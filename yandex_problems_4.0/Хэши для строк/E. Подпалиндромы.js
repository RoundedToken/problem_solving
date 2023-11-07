function manacher(s) {
    let n = s.length;
    let isPalindrome = Array(n).fill(0);

    let center = 0,
        right = 0;

    for (let i = 0; i < n; i++) {
        let mirror = 2 * center - i;

        if (right > i) {
            isPalindrome[i] = Math.min(right - i, isPalindrome[mirror]);
        }

        while (s[i + (1 + isPalindrome[i])] === s[i - (1 + isPalindrome[i])]) {
            isPalindrome[i]++;
        }

        if (i + isPalindrome[i] > right) {
            center = i;
            right = i + isPalindrome[i];
        }
    }

    let result = 0;
    for (let i = 0; i < n; i++) {
        result += (isPalindrome[i] + 1) / 2;
    }

    return result;
}

function main() {
    console.log(manacher(`aaa`));
}
if (require.main === module) {
    main();
}
