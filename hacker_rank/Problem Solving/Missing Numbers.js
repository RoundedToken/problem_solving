// https://www.hackerrank.com/challenges/missing-numbers/problem?isFullScreen=true
function missingNumbers(arr, brr) {
    let brrMAP = new Map();
    let arrMAP = new Map();
    let answer = [];
    for (let i = 0; i < brr.length; i++) {
        let element = brr[i];
        if (brrMAP.has(element)) brrMAP.set(element, brrMAP.get(element) + 1);
        else brrMAP.set(element, 1);
    }
    for (let i = 0; i < arr.length; i++) {
        let element = arr[i];
        if (arrMAP.has(element)) arrMAP.set(element, arrMAP.get(element) + 1);
        else arrMAP.set(element, 1);
    }
    for (let [key, val] of brrMAP) {
        if (arrMAP.has(key)) {
            if (arrMAP.get(key) < brrMAP.get(key)) answer.push(key);
        } else answer.push(key)
    }
    // console.table(answer)
    // console.table(brrMAP)
    // console.table(arrMAP)
    answer.sort((a, b) => { return a - b});
    return answer
}
function main() {
    let arr = [
        203, 204, 205, 206,
        207, 208, 203, 204,
        205, 206
    ];
    let brr = [
        203, 204, 204, 205,
        206, 207, 205, 208,
        203, 206, 205, 206,
        204
    ];
    console.log(missingNumbers(arr, brr));
}
if (require.main === module) {
    main();
}