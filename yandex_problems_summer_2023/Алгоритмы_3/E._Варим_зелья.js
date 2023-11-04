const makePotions = (str) => {
    let [params, ingredients] = str.trim().split('\n');
    ingredients = ingredients
        .trim()
        .split(' ')
        .map((v) => Number(v))
        .sort((a, b) => b - a);
    const [n, k] = params.trim().split(' ');
    const pSum = [0];
    for (let i = 0; i < ingredients.length; i++) {
        pSum[i + 1] = pSum[i] + ingredients[i];
    }
    let maxProfit = 10 ** 6 * 2 * k;
    let minProfit = 10 ** 6 * -2 * k;

    function isEnoughPotions(min) {
        let profit = 0;
        let count = 0;

        for (let v of ingredients) {
            if (v < min) break;
            count++;
            profit += v;
        }

        let rightPos = 1;
        while (rightPos < n && ingredients[rightPos] + ingredients[0] >= min) rightPos++;

        for (let leftPos in ingredients) {
            leftPos = +leftPos;
            if (leftPos + 1 >= rightPos) break;

            while (rightPos - 1 > leftPos && ingredients[leftPos] + ingredients[rightPos - 1] < min)
                rightPos--;

            count += rightPos - leftPos - 1;
            profit +=
                pSum[rightPos] -
                pSum[leftPos + 1] +
                ingredients[leftPos] * (rightPos - leftPos - 1);
        }

        return count >= k ? profit - (count - k) * min : Infinity;
    }

    while (minProfit <= maxProfit) {
        const mid = Math.floor((maxProfit + minProfit) / 2);

        if (isEnoughPotions(mid) !== Infinity) minProfit = mid + 1;
        else maxProfit = mid - 1;
    }

    return isEnoughPotions(minProfit - 1);
};

function main() {
    console.log(
        makePotions(`5 5
    -2 3 -5 5 1`)
    );
    console.log(
        makePotions(`2 1
    -1 1`)
    );
    console.log(
        makePotions(`6 9
    15 10 4 -1 -6 -10`)
    );
    console.log(
        makePotions(`3 4
    1 6 -9`)
    );
    console.log(
        makePotions(`5 5
    -1 -2 -3 1 2`)
    );
}
if (require.main === module) {
    main();
}
