// https://app.codility.com/programmers/lessons/9-maximum_slice_problem/max_double_slice_sum/
function solution(A) {
    let l = A.length;
    let max = -1000000000;
    function sum(arr) {
        let L = arr.length;
        let sum = 0;
        for (let i = 0; i < L; i++) {
            sum += arr[i]
        }
        return sum
    }
    for (let i = 0; i < l - 2; i++) {
        for (let g = i + 1; g < l - 1; g++) {
            for (let k = g + 1; k < l; k++) {
                let slice1 = A.slice(i + 1, g);
                let slice2 = A.slice(g + 1, k);
                let sum1;
                let sum2;
                if (slice1.length == 0) sum1 = 0;
                else sum1 = sum(slice1);
                if (slice2.length == 0) sum2 = 0;
                else sum2 = sum(slice2)
                if (sum1 + sum2 > max) max = sum1 + sum2
                console.log("i = ", i, "g = ", g, "k = ", k, slice1, slice2)
            }
        }
    }
    return max
}
function main() {
    let A = [3, 2, 6, -1, 4, 5, -1, 2];
    console.log(solution(A));
}
if (require.main === module) {
    main();
}