// https://www.hackerrank.com/challenges/mark-and-toys/problem?isFullScreen=true&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen
function maximumToys(prices, k) {
    let sum = 0;
    let count;
    prices.sort((a, b) => { return a - b })
    for (let i in prices) {
        sum += prices[i];
        if (sum > k) {
            count = Number(i)
            break;
        }
    }
    console.log(typeof count)
    return count
}
function main() {
    let prices = [1, 12, 5, 111, 200, 1000, 10];
    let k = 50
    console.log(maximumToys(prices, k));
}
if (require.main === module) {
    main();
}