// https://www.codewars.com/kata/55983863da40caa2c900004e/train/javascript


function nextBigger(n) {
    let nStr = n.toString();
    let nArr = nStr.split("");
    let l = nStr.length;
    //console.log(nArr)
    for (let i = l - 2; i >= 0; i--) {
        let min = Number.MAX_VALUE;
        let index;
        let flag = false;
        for (let g = l - 1; g > i; g--) {
            if (nArr[g] > nArr[i] && nArr[g] < min) { min = nArr[g]; index = g; flag = true }
        }
        if (flag) {
            let x = nArr[i];
            nArr[i] = nArr[index];
            nArr[index] = x;
            nArr = nArr.slice(0, i + 1).concat(nArr.slice(i + 1).sort((a, b) => a - b));
            return Number(nArr.join(""));
        }
        //console.log(min)
    }

    return -1;
}

function main() {
    let n = 144;
    console.log(nextBigger(n));
}
if (require.main === module) {
    main();
}
// Test.assertEquals(nextBigger(12),21)
// Test.assertEquals(nextBigger(513),531)
// Test.assertEquals(nextBigger(2017),2071)
// Test.assertEquals(nextBigger(414),441)
// Test.assertEquals(nextBigger(144),414)