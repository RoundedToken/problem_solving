// https://www.hackerrank.com/challenges/non-divisible-subset/problem?isFullScreen=true
function nonDivisibleSubset(k, s) {
    // Write your code here
    let count = 0
    let remArr = new Array(k).fill(0)
    for ( let val of s){
        remArr[val%k]=remArr[val%k]+1
    }
    for ( let val = 0 ; val <  Math.floor((k+2)/2); val++){
        if (val === 0 || ((val === Math.floor(k/2)) && (k%2 === 0))){
            if (remArr[val] > 0){
                 count += 1
            }
        } else {
            count += Math.max(remArr[val], remArr[k-val])
        }
    }
    return count
}
function main() {
}
if (require.main === module) {
    main();
}