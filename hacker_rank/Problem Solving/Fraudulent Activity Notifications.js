// https://www.hackerrank.com/challenges/fraudulent-activity-notifications/problem?isFullScreen=true&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen
function activityNotifications(expenditure, d) {
    let count = 0; 
    let l = expenditure.length;
    function median(arr) {
        let L = arr.length;
        let half = Math.floor(L / 2)
        let x;
        arr.sort((a, b) => { return a - b})
        if (L % 2) return arr[half]
        else  return (arr[half] + arr[half - 1]) / 2
    }
    for (let i = d; i < l; i++) {
        let D = expenditure.slice(i - d, i);
        console.log(D, median(D))
        console.log(expenditure)
        if (median(D) * 2 <= expenditure[i]) count++;
    }
    
    return count
}
function main() {
    let expenditure = [30, 20, 10, 40, 50];
    let d = 3;
    console.log(activityNotifications(expenditure, d));
}
if (require.main === module) {
    main();
}