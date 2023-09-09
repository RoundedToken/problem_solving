// https://leetcode.com/problems/group-by/

Array.prototype.groupBy = function(fn) {
    const group = {}

    for (const el of this) {
        const key = fn(el)

        if (key in group) group[key].push(el)
        else group[key] = [el]
    }

    return group
};