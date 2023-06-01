// https://www.codewars.com/kata/5420fc9bb5b2c7fd57000004/train/javascript

function highestRank(arr) {
    const map = new Map();

    arr.forEach((v) => {
        if (!map.has(v)) {
            map.set(v, 1);
        } else {
            map.set(v, map.get(v) + 1);
        }
    });

    return [...map.entries()]
        .sort((a, b) => {
            if (a[1] > b[1]) return 1;
            else if (b[1] > a[1]) return -1;
            else {
                if (a[0] > b[0]) return 1;
                else if (b[0] > a[0]) return -1;
                return 0;
            }
        })
        .at(-1)[0];
}

function main() {
    const arr = [12, 10, 8, 12, 7, 6, 4, 10, 12, 10];
    console.log(highestRank(arr));
}
if (require.main === module) {
    main();
}

// [12, 10, 8, 12, 7, 6, 4, 10, 12]              -->  12
// [12, 10, 8, 12, 7, 6, 4, 10, 12, 10]          -->  12
// [12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]  -->   3
