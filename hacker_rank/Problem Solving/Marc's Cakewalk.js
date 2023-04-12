// https://www.hackerrank.com/challenges/marcs-cakewalk/problem?isFullScreen=true&h_r=next-challenge&h_v=zen
function marcsCakewalk(calorie) {
    let sum = 0;
    calorie.sort((a, b) => { return b - a })
    for (let i = 0; i < calorie.length; i++) {
        sum += 2**i * calorie[i];
    }
    return sum
}
function main() {
    
    console.log();
}
if (require.main === module) {
    main();
}