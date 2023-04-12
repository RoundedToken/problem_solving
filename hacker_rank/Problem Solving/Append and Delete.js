// https://www.hackerrank.com/challenges/append-and-delete/problem?isFullScreen=true
function appendAndDelete(s, t, k) {
    let result = 0;
    let string = '';
    if (s[0] !== t[0]) {
         result = s.length + t.length;
    } else {
     let i = 0, j = 0;
     while (i < s.length && j < t.length) {
        if (s[i] === t[j]) {
            result++;
            string += s[i];
            if (s[i + 1] !== t[j + 1]) 
            {
                 break;
            }
        }
        i++;
        j++;
     }
     if (string.length < t.length &&
     string[0] !== t[t.length - 1] &&
     string.length === s.length) {
        result = string.length + t.length;
     } else {
        result = (s.length - result) + (t.length - result);
     } 
    }
    if (result <= k) {
        return "Yes";
    } else
    return "No";
}
function main() {
}
if (require.main === module) {
    main();
}