// https://leetcode.com/problems/group-the-people-given-the-group-size-they-belong-to/description/?envType=daily-question&envId=2023-09-11

var groupThePeople = function (groupSizes) {
    const map = new Map();
    const result = [];

    for (let i = 0; i < groupSizes.length; i < i++) {
        const size = groupSizes[i];
        const group = map.get(size);

        if (group) {
            if (group.length === size) {
                result.push(group);
                map.delete(size);
                map.set(size, [i]);
            } else {
                group.push(i);
            }
        } else {
            map.set(size, [i]);
        }
    }

    for (const value of map.values()) {
        result.push(value);
    }

    return result;
};
