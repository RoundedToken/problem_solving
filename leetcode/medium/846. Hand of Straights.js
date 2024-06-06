// https://leetcode.com/problems/hand-of-straights/description/?envType=daily-question&envId=2024-06-06

var isNStraightHand = function (hand, groupSize) {
    if (hand.length % groupSize) return false;
    hand.sort((a, b) => a - b);
    const handMap = hand.reduce((map, num) => {
        const count = map.get(num) ?? 0;
        return map.set(num, count + 1);
    }, new Map());

    for (const [target, count] of handMap) {
        if (count === 0) continue;

        for (let num = target; num < target + groupSize; num++) {
            const hash = handMap.get(num) ?? 0;
            if (hash < count) return false;
            handMap.set(num, hash - count);
        }
    }
    return true;
};
