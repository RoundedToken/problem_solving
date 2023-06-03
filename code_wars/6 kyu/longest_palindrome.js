// https://www.codewars.com/kata/54bb6f887e5a80180900046b/train/javascript

longestPalindrome = function (s) {
    let l = s.length;

    if (s === '') return 0;

    const rS = s.split('').reverse().join('');

    while (l > 1) {
        for (let i = 0; i <= s.length - l; i++) {
            const slice = s.slice(i, i + l);
            const rSlice = rS.slice(s.length - i - l, s.length - i);

            if (slice === rSlice) return l;
        }
        l--;
    }
    return l;
};

function main() {
    console.log(longestPalindrome('zzbaabcd'));
}
if (require.main === module) {
    main();
}

// "a" -> 1
// "aab" -> 2
// "abcde" -> 1
// "zzbaabcd" -> 4
// "" -> 0
