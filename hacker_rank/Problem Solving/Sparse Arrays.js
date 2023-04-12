// https://www.hackerrank.com/challenges/sparse-arrays/problem?isFullScreen=true
function matchingStrings(stringList, queries) {
    let result = [];
    let lS = stringList.length;
    let lQ = queries.length;
    for (let i = 0; i < lQ; i++) {
        let count = 0;
        for (let g = 0; g < lS; g++) {
            if (queries[i] == stringList[g]) {
                count++;
            }
        }
        result.push(count)
    }
    return result
}
function main() {
}
if (require.main === module) {
    main();
}