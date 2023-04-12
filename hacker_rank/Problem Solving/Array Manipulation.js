// https://www.hackerrank.com/challenges/crush/problem?isFullScreen=true
function arrayManipulation(n, queries) {
    let resultUnfiltred = [];           //we need to prepare before summarize values
    let indexesUsedUnfiltred = []       //so we start 
    let queriesLength = queries.length;
    let max = 0;
    let plus = 0;   //it's for querie 
    for (let i = 0; i < queriesLength; i++) {             //we need only indexes that used in 
        resultUnfiltred[queries[i][0] - 1] = 0;           //"queries", so we get them!!
        resultUnfiltred[queries[i][1] - 1] = 0;
        indexesUsedUnfiltred[queries[i][0] - 1] = queries[i][0];
        indexesUsedUnfiltred[queries[i][1] - 1] = queries[i][1];
    }
    const result = resultUnfiltred.filter(element => {      //remove empty items
        return element !== undefined;
    });
    const indexesUsed = indexesUsedUnfiltred.filter(element => {    //remove empty items
        return element !== undefined;
    });
    let resultLength = result.length
    console.log("result = ", result);
    console.log("indexesUsed = ", indexesUsed)
    const MAP = new Map();                             // create
    for (let i = 0; i < resultLength; i++) {           // the
        MAP.set(indexesUsed[i], i);                    // MAP
    }
    console.log(MAP)
    for (let i = 0; i < queriesLength; i++) {       //now we ready to start summarize values 
        let start = MAP.get(queries[i][0]);         //use our map
        let end = MAP.get(queries[i][1]);
        let value = queries[i][2];
        if (value == 0) { continue }            //we skeep value == 0 
        if (start == 1 && end == n) {             //we save value for the end and skeep for next loop
            plus += value;
            continue;
        }
        for (let k = start; k <= end; k++) {   //start = MAP.get(queries[i][0]) ^^
            result[k] += value;                //end = MAP.get(queries[i][1]    ||
        }
    }
    for (let k = 0; k < resultLength; k++) {    //get max
        if (result[k] > max) {
            max = result[k];
        }
    }
    console.log("result = ", result);
    return max + plus;  //don't forget about "plus"
}
function main() {
    let n = 10;
    let queries = [[2, 6, 8],
                   [3, 5, 7],
                   [1, 8, 1],
                   [5, 9, 15]]
    console.log(arrayManipulation(n, queries));
}
if (require.main === module) {
    main();
}