// https://app.codility.com/programmers/lessons/9-maximum_slice_problem/max_profit/
function solution(A) {
    console.log(A);
    let minIndex;
    let maxIndex;
    let max = 0;
    let min = Number.MAX_VALUE;
    let sumMax = 0;
    let sumMin = 0;
    let sum$ = 0;
    for (let i = 1; i < A.length; i++) {
        if (max < A[i]) {
            max = A[i];
            maxIndex = i;
        }
    }
    for (let i = 0; i < A.length - 1; i++) {
        if (min > A[i]) {
            min = A[i];
            minIndex = i;
        }
    }
    /*if (maxIndex < minIndex) {
        for (let i = maxIndex + 1; i < minIndex - 1; i++) {
            for (let g = i + 1; g <= minIndex - 1; g++) {
                if (A[g] - A[i] > sum$) {
                    sum$ = A[g] - A[i];
                }
            }
        }
        return sum$;
    }*/
    for (let i = maxIndex - 1; i >= 0; i--) {
        if (max - A[i] > sumMax) {
            sumMax = max - A[i];
        }
    }
    for (let i = minIndex + 1; i < A.length; i++) {
        if (A[i] - min > sumMin) {
            sumMin = A[i] - min;
        }
    }
    console.log(sumMax, sumMin);
    if ((0 <= sumMax) && (sumMin <= sumMax)) {
        return sumMax;
    } else if ((0 <= sumMin) && (sumMax <= sumMin)) {
        return sumMin;
    } else {return -1;}
}
function main() {
    let B = [8, 9, 3, 6, 1, 2];
    let A = [23171, 21011, 21123, 21366, 21013, 21367];
    console.log(solution(B));
}
if (require.main === module) {
    main();
}