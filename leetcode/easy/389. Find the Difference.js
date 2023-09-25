// https://leetcode.com/problems/find-the-difference/?envType=daily-question&envId=2023-09-25

const getMap = (str) => {
    const map = new Map();

    for (const char of str) {
        const count = map.get(char);

        if (count === undefined) map.set(char, 1);
        else map.set(char, count + 1);
    }

    return map;
};

var findTheDifference = function (s, t) {
    const mapS = getMap(s);
    const mapT = getMap(t);

    for (const key of mapT.keys()) {
        const countS = mapS.get(key);
        const countT = mapT.get(key);

        if (countS === undefined || countS !== countT) {
            return key;
        }
    }
};
