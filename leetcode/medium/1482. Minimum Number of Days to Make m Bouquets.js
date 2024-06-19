// https://leetcode.com/problems/minimum-number-of-days-to-make-m-bouquets/description/?envType=daily-question&envId=2024-06-19

var minDays = function (bloomDay, m, k) {
    const canMakeBouquets = (days) => {
        let bouquets = 0;
        let flowers = 0;

        for (let i = 0; i < bloomDay.length; i++) {
            if (bloomDay[i] <= days) {
                flowers++;
                if (flowers == k) {
                    bouquets++;
                    flowers = 0;
                }
            } else {
                flowers = 0;
            }
        }
        return bouquets >= m;
    };

    if (m * k > bloomDay.length) {
        return -1;
    }

    let left = 1;
    let right = Math.max(...bloomDay);

    while (left < right) {
        const mid = Math.floor((left + right) / 2);
        if (canMakeBouquets(mid)) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }

    return left;
};
