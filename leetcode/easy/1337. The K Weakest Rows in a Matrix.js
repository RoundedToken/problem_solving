// https://leetcode.com/problems/the-k-weakest-rows-in-a-matrix/?envType=daily-question&envId=2023-09-18

const getCount = (row) => {
    let count = 0;
    let index = 0;
    let elem = row[index];

    while (elem != 0 && index !== row.length) {
        count++;
        index++;
        elem = row[index];
    }

    return count;
};

var kWeakestRows = function (mat, k) {
    const result = [];
    const other = [];
    let currentCount = getCount(mat[0]);
    let nextCount;

    for (let rowInd = 0; rowInd < mat.length - 1; rowInd++) {
        const nextRow = mat[rowInd + 1];
        console.log(rowInd);
        nextCount = getCount(nextRow);

        if (nextCount > currentCount || nextCount === currentCount) {
            result.push({ rowInd, count: currentCount });
        } else {
            other.push({ rowInd, count: currentCount });
        }

        currentCount = nextCount;
    }
    other.push({ rowInd: mat.length - 1, count: getCount(mat[mat.length - 1]) });
    return result
        .concat(other)
        .sort((a, b) => {
            const diff = a.count - b.count;
            if (diff === 0) {
                return a.rowInd - b.rowInd;
            } else return diff;
        })
        .slice(0, k)
        .map((v) => v.rowInd);
};
