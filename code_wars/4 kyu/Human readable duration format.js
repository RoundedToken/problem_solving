// https://www.codewars.com/kata/52742f58faf5485cae000b9a/train/javascript
function formatDuration(seconds) {
    if (seconds == 0) return "now";
    let years = Math.floor(seconds / 31536000);
    seconds %= 31536000;
    let days = Math.floor(seconds / 86400);
    seconds %= 86400;
    let hours = Math.floor(seconds / 3600);
    seconds %= 3600;
    let minutes = Math.floor(seconds / 60);
    seconds %= 60;
    console.log(years, days, hours, minutes, seconds);
    let answer = "";
    if (years == 1) answer += "1 year, ";
    else if (years > 1) answer += years.toString() + " years, ";
    if (days == 1) answer += "1 day, ";
    else if (days > 1) answer += days.toString() + " days, ";
    if (hours == 1) answer += "1 hour, ";
    else if (hours > 1) answer += hours.toString() + " hours, ";
    if (minutes == 1) answer += "1 minute, ";
    else if (minutes > 1) answer += minutes.toString() + " minutes, ";
    if (seconds == 1) answer += "1 second, ";
    else if (seconds > 1) answer += seconds.toString() + " seconds, ";
    answer = answer.split("").reverse().join("");
    answer = answer.replace(" ,", "");
    answer = answer.replace(",", "dna ");
    answer = answer.split("").reverse().join("");
    return answer

}
function main() {
    let seconds = 8958784;
    console.log(formatDuration(seconds));
}
if (require.main === module) {
    main();
}