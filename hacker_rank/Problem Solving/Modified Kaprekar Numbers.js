// https://www.hackerrank.com/challenges/kaprekar-numbers/problem?isFullScreen=true
function kaprekarNumbers(p, q) {
    
    let square = "";
    let solution = [];
    for (let i = p; i <= q; i++) {
        let d = i.toString().length
        square = (i * i).toString();
        if ( Number(square.slice(square.length - d, square.length)) + Number(square.slice(0, square.length - d)) == i ) {
            solution.push(i);
        }
    }
    if (solution.length == 0) {console.log("INVALID RANGE")}
    console.log(solution.join(" "))

}
function main() {
}
if (require.main === module) {
    main();
}