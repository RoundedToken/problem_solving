// https://www.hackerrank.com/challenges/bon-appetit/problem?isFullScreen=true
function bonAppetit(bill, k, b) {
    let value = 0;
    for (let i = 0; i < bill.length; i++) {
        if (i == k) {
            continue;
        } else {
            value += bill[i];
        }
    }
    value = value / 2;
    if (value == b) {console.log( "Bon Appetit")} 
    else {console.log(b - value)}
}
function main() {
}
if (require.main === module) {
    main();
}