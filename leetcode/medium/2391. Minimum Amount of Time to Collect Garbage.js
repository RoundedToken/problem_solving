// https://leetcode.com/problems/minimum-amount-of-time-to-collect-garbage/?envType=daily-question&envId=2023-11-20

var garbageCollection = function (garbage, travel) {
    let travelTime = 0;
    garbage = garbage.reverse();

    for (const type of ['G', 'P', 'M']) {
        const lastHouseWithGarbage = garbage.findIndex((house) => house.includes(type));

        if (lastHouseWithGarbage === -1) {
            continue;
        }

        travelTime += travel
            .slice(0, garbage.length - lastHouseWithGarbage - 1)
            .reduce((acc, num) => acc + num, 0);
    }

    return garbage.join('').length + travelTime;
};
