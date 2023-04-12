// https://www.hackerrank.com/challenges/plus-minus/problem?isFullScreen=true
function plusMinus(arr) {
    let a = 0;
    let b = 0;
    let c = 0;
    let n = arr.length
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            a++;
        } else if (arr[i] < 0) {
            b++;
        } else { 
            c++;
        }
    }
    console.log(a/n.toFixed(6));
    console.log(b/n.toFixed(6));
    console.log(c/n.toFixed(6));
}
function main() {
}
if (require.main === module) {
    main();
}