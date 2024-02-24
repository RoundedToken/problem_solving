// https://leetcode.com/problems/find-all-people-with-secret/description/?envType=daily-question&envId=2024-02-24

var findAllPeople = function (n, meetings, firstPerson) {
    const parent = new Array(n).fill(0).map((_, i) => i);
    const find = (e) => (parent[e] === e ? e : (parent[e] = find(parent[e])));
    const reset = (e) => (parent[e] = e);

    meetings.sort((a, b) => a[2] - b[2]);

    parent[firstPerson] = 0;
    for (let i = 0, j = 0; j < meetings.length; j++) {
        if (j + 1 < meetings.length && meetings[j + 1][2] === meetings[j][2]) continue;

        const set = new Set();
        for (let k = i; k <= j; k++) {
            const [x, y] = meetings[k];
            set.add(x);
            set.add(y);
            if (!find(x)) parent[find(y)] = find(x);
            else parent[find(x)] = find(y);
        }
        set.forEach((e) => find(e) && reset(e));
        i = j + 1;
    }
    return new Array(n)
        .fill(0)
        .map((_, i) => i)
        .filter((e) => !find(e));
};
