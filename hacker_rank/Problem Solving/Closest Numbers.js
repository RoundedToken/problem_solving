// https://www.hackerrank.com/challenges/closest-numbers/problem?isFullScreen=true
function closestNumbers(arr) {

    arr.sort((a, b) => { return a - b})
    let min = Number.MAX_VALUE;
    let l = arr.length;
    let answer = Array();

    for (let i = 1; i < l; i++) {
        let diff = arr[i] - arr[i - 1];
        if (diff < min) min = diff;
    }

    for (let i = 1; i < l; i++) {
        if(arr[i] - arr[i - 1] == min) {
            answer.push(arr[i - 1]);
            answer.push(arr[i]);
        }
    }
    
    return answer

}
function main() {
    arr = [
        -20, -3916237,
    -357920, -3620601,
    7374819, -7330761,
         30,  6246457,
   -6461594,   266854
 ];
    console.log(closestNumbers(arr));
}
if (require.main === module) {
    main();
}