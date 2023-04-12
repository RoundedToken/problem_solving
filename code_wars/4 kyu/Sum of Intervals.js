// https://www.codewars.com/kata/52b7ed099cdc285c300001cd/train/javascript
function sumIntervals(intervals) {
    intervals.sort((a, b) => { return (a[1] - a[0]) - (b[1] - b[0]) });
    function red(intervals) {

        let arr = [];
        arr.push(intervals[intervals.length - 1]);
        intervals.pop();
        while (intervals.length > 0) {
            let element = intervals[intervals.length - 1];
            let flag = true;
            for (let i = 0; i < arr.length; i++) {
                if (element[0] == arr[i][0] && element[1] > arr[i][1]) {
                    flag = false;
                    arr[i][1] = element[1];
                    break
                } else if (element[1] == arr[i][1] && element[0] < arr[i][0]) {
                    flag = false;
                    arr[i][0] = element[0];
                    break
                } else if (element[0] > arr[i][0] && element[0] < arr[i][1]) {
                    if (element[1] > arr[i][1]) {
                        arr[i][1] = element[1];
                    }
                    flag = false;
                    break;
                } else if (element[1] < arr[i][1] && element[1] > arr[i][0]) {
                    if (element[0] < arr[i][0]) {
                        arr[i][0] = element[0];
                    }
                    flag = false;
                    break
                } else if (element[0] >= arr[i][0] && element[1] <= arr[i][1]) {
                    flag = false;
                    break;
                }
            }
            if (flag) arr.push(element);
            intervals.pop();
        }
        return arr
    }
    let flag = true;
    let l = intervals.length;
    while (flag) {
        intervals = red(intervals);
        if (l == intervals.length) break
        l = intervals.length;
    }
    return intervals.reduce((x, v) => x + (v[1] - v[0]), 0);
}
function main() {
    let intervals = [
        [1, 5],
        [10, 20],
        [1, 6],
        [16, 19],
        [5, 11]
    ];
    console.log(sumIntervals(intervals));
}
if (require.main === module) {
    main();
}
// function sumIntervals(intervals) {
//     let points = new Set();
//     for (let i of intervals) {
//         points.add(i[0]);
//         points.add(i[1]);
//     }
//     points = Array.from(points).sort((a, b) => a - b);
//     let sum = 0;
//     for (let i = 1; i < points.length; i++) {
//         let flag = false;
//         for (let g of intervals) {
//             if (points[i - 1] >= g[0] && points[i] <= g[1]) {
//                 flag = true;
//                 break;
//             }
//         }
//         if (flag) sum += points[i] - points[i - 1];
//     }
//     return sum
// }
// function main() {
//     let intervals = [[-1e9, 1e9]];
//     console.log(sumIntervals(intervals));
// }
// if (require.main === module) {
//     main();
// }