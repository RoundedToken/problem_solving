const solution = (_, str, qq) => {
    console.log('expect', qq);
    // let [le, peaks] = str.trim().split('\n');
    // peaks = peaks
    //     .trim()
    //     .split(' ')
    //     .map((v) => Number(v));
    peaks = Array.from(str);
    let leftInd;
    let rightInd;
    const highest = [];
    const max = Math.max(...peaks);
    let totalCount = 0;
    //search leftInd
    for (let i = 0; i < peaks.length; i++)
        if (peaks[i] < peaks[i - 1]) {
            leftInd = i - 1;
            break;
        }
    //search rightInd
    for (let i = peaks.length - 1; i >= 0; i--)
        if (peaks[i] < peaks[i + 1]) {
            rightInd = i + 1;
            break;
        }
    //search highest peaks
    for (let i in peaks) {
        i = +i;
        if (peaks[i] === max) highest.push(i);
    }
    //corner cases with 0
    if (
        leftInd === undefined ||
        rightInd === undefined ||
        (leftInd === highest[0] && rightInd === highest[0])
    )
        return 0;

    function countBetween(arr, isRight) {
        const arrM = isRight ? arr : arr.reverse();
        let count = 0;
        let currentPeak = arr[0];

        for (let val of arrM) {
            const diff = currentPeak - val;

            if (val >= currentPeak) currentPeak = val;
            else {
                count += diff;
            }
        }
        return count;
    }
    const sliceFromLeftToFirstH = peaks.slice(leftInd, highest[0]);
    const sliceFromLastHToRight = peaks.slice(highest.at(-1), rightInd + 1);
    const sliceFromFirstToLastH = peaks.slice(highest[0], highest.at(-1) + 1);
    const sliceFromFirstHToRight = peaks.slice(highest[0], rightInd + 1);
    const sliceFromLeftToLastH = peaks.slice(leftInd, highest.at(-1));

    if (highest.includes(leftInd) && highest.includes(rightInd)) {
        totalCount += countBetween(peaks.slice(leftInd, rightInd + 1));
        return totalCount;
    }

    if (highest.length === 1) {
        totalCount += countBetween(sliceFromLeftToFirstH, true);
        totalCount += countBetween(sliceFromFirstHToRight, false);
        return totalCount;
    }

    if (highest.includes(rightInd) && !highest.includes(leftInd)) {
        totalCount += countBetween(sliceFromLeftToFirstH, true);
        totalCount += countBetween(sliceFromFirstToLastH, true);
        return totalCount;
    }

    if (highest.includes(leftInd) && !highest.includes(rightInd)) {
        totalCount += countBetween(sliceFromLeftToLastH, true);
        totalCount += countBetween(sliceFromLastHToRight, false);
        return totalCount;
    }

    totalCount += countBetween(sliceFromLeftToFirstH, true);
    totalCount += countBetween(sliceFromFirstToLastH, true);
    totalCount += countBetween(sliceFromLastHToRight, false);
    return totalCount;
};

function main() {
    console.log(solution(9, [5, 3, 7, 7, 3, 5], 4));
    console.log(solution(9, [100, 3, 3, 3, 50, 3, 3, 3, 100], 632));
    console.log(solution(11, [2, 5, 2, 3, 6, 9, 3, 1, 3, 4, 6], 18));
    console.log(solution(9, [3, 5, 8, 12, 20, 12, 8, 5, 3], 0));
    console.log(solution(13, [5, 4, 3, 2, 3, 4, 5, 4, 3, 2, 3, 4, 5], 18));
    console.log(solution(7, [3, 4, 5, 6, 5, 4, 3], 0));
    console.log(solution(5, [6, 8, 4, 5, 1], 1));
    console.log(solution(8, [4, 3, 6, 2, 4, 2, 2, 6], 15));
    console.log(solution(11, [5, 5, 4, 3, 2, 1, 2, 3, 4, 5, 5], 16));
    console.log(solution(13, [3, 2, 8, 7, 6, 5, 4, 8, 2, 8, 6, 7, 8], 20));
    console.log(solution(13, [3, 2, 8, 7, 6, 5, 4, 8, 2, 8, 6, 7, 8], 20));
    console.log(
        solution(
            27,
            [3, 2, 8, 7, 6, 5, 4, 8, 2, 8, 6, 7, 8, 1, 8, 1, 7, 1, 6, 1, 5, 1, 4, 1, 3, 1, 9],
            84
        )
    );
    console.log(
        solution(
            27,
            [3, 2, 8, 7, 6, 5, 4, 8, 2, 8, 6, 7, 8, 1, 8, 1, 7, 1, 6, 1, 5, 1, 4, 1, 3, 1, 9],
            84
        )
    );
    console.log(
        solution(
            27,
            [10, 2, 8, 7, 6, 5, 4, 8, 2, 8, 6, 7, 8, 1, 8, 1, 7, 1, 6, 1, 5, 1, 4, 1, 3, 1, 10],
            139
        )
    );
    console.log(solution(10, [10, 10, 10, 10, 10, 10, 10, 10, 10, 10], 0));
    console.log(solution(10, [10, 11, 11, 11, 11, 11, 11, 11, 11, 10], 0));
    console.log(solution(11, [10, 11, 10, 11, 10, 11, 10, 11, 10, 11, 10], 4));
    console.log(solution(11, [10, 11, 10, 11, 10, 11, 10, 11, 10, 11, 10], 4));
    console.log(solution(10, [10, 9, 8, 7, 6, 5, 4, 3, 2, 1], 0));
    console.log(solution(10, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 0));
    console.log(solution(19, [10, 1, 9, 1, 8, 1, 7, 1, 6, 1, 5, 1, 4, 1, 3, 1, 2, 1], 36));
}
if (require.main === module) {
    main();
}
