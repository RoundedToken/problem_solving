// https://www.hackerrank.com/challenges/picking-numbers/problem?isFullScreen=true
function pickingNumbers(a) {
    a.sort(function (a, b) { return a - b });
    console.log(a);
    let count = 0;
    let maxCount = 0;
    let flag = 0;
    let front = 0;
    let back = 0;
    while (flag < a.length - 1) {
        while (a[front] - a[back] < 2) {
            count++;
            if (a[front] > a[front - 1]) {
                flag = front;
            }
            front++;
        }
        if (count > maxCount) {
            maxCount = count;
        }
        count = 0;
                if (flag == back) {
            flag++;
        }
        back = flag;
        front = flag;
    }
    return maxCount;
}
function main() {
}
if (require.main === module) {
    main();
}