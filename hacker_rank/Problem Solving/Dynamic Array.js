// https://www.hackerrank.com/challenges/dynamic-array/problem?isFullScreen=true
function dynamicArray(n, queries) {
    let arr = Array(n)
    let answer = [];
    for (let i = 0; i < n; i++) {
        arr[i] = [];
    }
    let l = queries.length
    let lastAnswer = 0;
    for (let i = 0; i < l; i++) {
        let x = queries[i][1];
        let y = queries[i][2];
        let idx = (x ^ lastAnswer) % n;
        if (queries[i][0] == 1) {
            arr[idx].push(y)
        } else {
            lastAnswer = arr[idx][y % arr[idx].length];
            answer.push(lastAnswer);
        }
    }
    return answer
}
function main() {
}
if (require.main === module) {
    main();
}