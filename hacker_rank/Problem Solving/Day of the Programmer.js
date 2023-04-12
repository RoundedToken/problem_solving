// https://www.hackerrank.com/challenges/day-of-the-programmer/problem?isFullScreen=true
function dayOfProgrammer(year) {
    if (year == 1918) {return "26.09.1918"}
    else if (year < 1918 && year % 4 == 0) {return "12.09." + year.toString()}
    else if (year > 1918 && (year % 4 == 0 && year % 100 != 0 || year % 400 == 0)) {
        return "12.09." + year.toString();
    }
    else {return "13.09." + year.toString()}
}
function main() {
}
if (require.main === module) {
    main();
}