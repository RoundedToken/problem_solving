// https://leetcode.com/problems/join-two-arrays-by-id/description/

var join = function (arr1, arr2) {
    const result = [];

    for (const el of arr1) {
        result[el.id] = el;
    }

    for (const el of arr2) {
        const old = result[el.id];

        if (old) {
            for (const [key, value] of Object.entries(el)) {
                old[key] = value;
            }
        } else result[el.id] = el;
    }

    return result.flat();
};
