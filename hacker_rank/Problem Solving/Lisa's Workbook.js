// https://www.hackerrank.com/challenges/lisa-workbook/problem?isFullScreen=true
function workbook(n, k, arr) {
    let page = [[]];
    let num = 0;
    let count = 0;
    for (let i = 0; i < n; i++) {
        for (let g = 1; g <= arr[i]; g++) {
            page[num].push(g);
            if (g % k == 0) {
                page.push([])
                num++;
            }
        }
        if (arr[i] % k != 0) {
            page.push([])
            num++;
        }
    }
    page.pop()
    for (let i = 0; i < page.length; i++) {
        for (let g = 0; g < page[i].length; g++) {
            if (page[i][g] == i + 1) {
                count++;
            }
        }
    }
    console.log(page);
    return count
}
function main() {
    let arr = [4, 2, 6, 1, 10];
    let n = 5;
    let k = 3;
    console.log(workbook(n, k, arr));
}
if (require.main === module) {
    main();
}