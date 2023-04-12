// https://www.hackerrank.com/challenges/reduced-string/problem?isFullScreen=true
function superReducedString(s) {
    for (let i = 0; i < s.length;) {
        if (s.charAt(i) == s.charAt(i + 1)) {
            s = s.slice(0, i).concat(s.slice(i + 2, s.length))
            i = 0
        }
        else i++
    }
    if (s.charAt(0) == s.charAt(1)) return "Empty String"
    else return s
}
function main() {
    let s = "acdqglrfkqyuqfjkxyqvnrtysfrzrmzlygfveulqfpdbhlqdqrrqdqlhbdpfqluevfgylzmrzrfsytrnvqyxkjfquyqkfrlacdqj";
    console.log(superReducedString(s));
}
if (require.main === module) {
    main();
}