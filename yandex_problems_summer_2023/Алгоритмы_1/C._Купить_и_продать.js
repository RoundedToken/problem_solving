const buyAndSell = (days, prices) => {
    let maxProfit = 0;
    let buyInd = 0;
    let sellInd = 0;
    let minPrice = 50001;
    let minInd;

    for (let i = 1; i < prices.length; i++) {
        if (prices[i - 1] < minPrice) {
            minPrice = prices[i - 1];
            minInd = i - 1;
        }

        const profit = prices[i] * Math.floor(1000 / minPrice) - 1000;

        if (profit > maxProfit) {
            maxProfit = profit;
            buyInd = minInd;
            sellInd = i;
        }
    }

    return maxProfit === 0 ? '0 0' : `${buyInd + 1} ${sellInd + 1}`;
};

function main() {
    console.log(buyAndSell(6, [2, 3, 2, 23, 22, 24, 5, 24]));
    console.log(buyAndSell(4, [5, 5, 5, 5]));
    console.log(buyAndSell(2, [1, 2]));
    console.log(buyAndSell(2, [1]));
    console.log(buyAndSell(2, [7, 14, 1, 5]));
}
if (require.main === module) {
    main();
}
