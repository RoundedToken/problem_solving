// https://www.codewars.com/kata/559536379512a64472000053/train/javascript

function playPass(s, n) {
    console.log('Z'.charCodeAt());
    return s
        .split('')
        .map((char) => {
            if (/[A-Z]|[a-z]/.test(char))
                return String.fromCharCode(
                    char.charCodeAt() + n > 90
                        ? 64 + ((char.charCodeAt() + n) % 90)
                        : char.charCodeAt() + n
                );
            if (/[0-9]/.test(char)) return (9 - Number(char)).toString();
            return char;
        })
        .map((char, ind) => {
            if (ind % 2 === 0) return char.toUpperCase();
            else return char.toLowerCase();
        })
        .reverse()
        .join('');
}

function main() {
    console.log(playPass('MY GRANMA CAME FROM NY ON THE 23RD OF APRIL 2015', 2));
}
if (require.main === module) {
    main();
}
