// https://www.codewars.com/kata/5592e3bd57b64d00f3000047/train/javascript
function findNb(m) {
    let x = 1;
    while (m > 0) {
        m -= x ** 3;
        if (m == 0) break
        x++;
       
    }
    if (m == 0) return x
    else return -1
}
function main() {
    let m = 91716553919377;
    console.log(findNb(m));
}
if (require.main === module) {
    main();
}
// findNb(1071225) --> 45

// findNb(91716553919377) --> -1