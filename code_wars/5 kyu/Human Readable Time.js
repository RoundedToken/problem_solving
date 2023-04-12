// https://www.codewars.com/kata/52685f7382004e774f0001f7/train/javascript
function humanReadable(seconds) {
    if (seconds > 359999) seconds = 359999;
    let h = Math.floor(seconds / 3600);
    let rem = seconds % 3600;
    let m = Math.floor(rem / 60);
    rem %= 60;
    let s = rem;
    if (h < 10) h = "0" + h.toString();
    else h = h.toString();
    if (m < 10) m = "0" + m.toString();
    else m = m.toString();
    if (s < 10) s = "0" + s.toString();
    else s = s.toString();
    let answer = h + ":" + m + ":" + s;
    return answer
}
function main() {
    let seconds = 359999
    console.log(humanReadable(seconds));
}
if (require.main === module) {
    main();
}