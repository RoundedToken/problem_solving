// https://leetcode.com/problems/candy/description/?envType=daily-question&envId=2023-09-13

var candy = function (ratings) {
    const map = new Map();
    let count = 0;

    for (let i = 0; i < ratings.length; i++) {
        map.set(i, { rating: ratings[i], candies: 0 });
    }

    const order = [...map.entries()].sort((a, b) => a[1].rating - b[1].rating);

    for (const [ind, obj] of order) {
        let { rating } = obj;
        const prev = map.get(ind - 1);
        const next = map.get(ind + 1);
        const { rating: ratingP, candies: candiesP } = prev ?? { rating: -Infinity, candies: 0 };
        const { rating: ratingN, candies: candiesN } = next ?? { rating: -Infinity, candies: 0 };
        const max = Math.max(candiesP, candiesN);

        if (rating > ratingP && rating <= ratingN) {
            obj.candies += candiesP + 1;
            count += candiesP + 1;
        } else if (rating <= ratingP && rating > ratingN) {
            obj.candies += candiesN + 1;
            count += candiesN + 1;
        } else if (rating > ratingP || rating > ratingN) {
            obj.candies += max + 1;
            count += max + 1;
        } else {
            obj.candies++;
            count++;
        }
    }

    return count;
};
