const breakPalindrome = (palindrome) => {
    if (palindrome === '' || palindrome.length === 1) return '';

    if (palindrome.length % 2) {
        const left = palindrome.slice(0, Math.floor(palindrome.length / 2));
        const right = palindrome.slice(Math.floor(palindrome.length / 2) + 1);

        if (/^[a]*$/.test(left) && /^[a]*$/.test(right))
            return palindrome.slice(0, palindrome.length - 1) + 'b';
    } else {
        if (/^[a]*$/.test(palindrome)) return palindrome.slice(0, palindrome.length - 1) + 'b';
    }

    for (let i in palindrome) {
        if (palindrome[i] === 'a') continue;
        else return palindrome.slice(0, i) + 'a' + palindrome.slice(+i + 1);
    }
};

function main() {
    console.log('1. ', breakPalindrome(''));
    console.log('2. ', breakPalindrome('a'));
    console.log('3. ', breakPalindrome('abba'));
    console.log('4. ', breakPalindrome('abcba'));
    console.log('5. ', breakPalindrome('aaaaaa'));
    console.log('6. ', breakPalindrome('aaacaaa'));
    console.log('7. ', breakPalindrome('abbcbba'));
    console.log('8. ', breakPalindrome('abbccbba'));
    console.log('8. ', breakPalindrome('bbbbb'));
    console.log('9. ', breakPalindrome('baaab'));
    console.log('10. ', breakPalindrome('aba'));
    console.log('11. ', breakPalindrome('cac'));
}
if (require.main === module) {
    main();
}
