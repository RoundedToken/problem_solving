// https://www.hackerrank.com/challenges/tower-breakers-1/problem?isFullScreen=true&h_r=next-challenge&h_v=zen
function towerBreakers(n, m) {
    if (m == 1) {return 2}
    if (n % 2 != 0) {return 1}
    else {return 2}

}
function main() {
    
    console.log(towerBreakers(n, m));
}
if (require.main === module) {
    main();
}