// https://leetcode.com/problems/compact-object/description/

var compactObject = function (obj) {
    if (Array.isArray(obj)) {
        const clearedArr = [];

        for (const el of obj) {
            if (el === null) continue;
            else if (typeof el === 'object') clearedArr.push(compactObject(el));
            else if (Boolean(el)) clearedArr.push(el);
        }

        return clearedArr;
    } else {
        for (const [key, value] of Object.entries(obj)) {
            if (value === null) delete obj[key];
            else if (typeof value === 'object') obj[key] = compactObject(value);
            else if (!Boolean(value)) delete obj[key];
        }

        return obj;
    }
};
