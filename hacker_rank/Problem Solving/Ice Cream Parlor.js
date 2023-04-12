// https://www.hackerrank.com/challenges/icecream-parlor/problem?isFullScreen=true
function icecreamParlor(m, arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let g = i + 1; g < arr.length; g++) {
            if (arr[i] + arr[g] == m) return [i + 1, g + 1];
        }
    }
 }
function main() {
    
    console.log(icecreamParlor(m, arr));
}
if (require.main === module) {
    main();
}