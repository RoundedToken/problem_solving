const solotion = (str) => {
    let [n, ...dates] = str.trim().split('\n');
    dates = dates
        .map((v, i) =>
            v
                .trim()
                .split(' ')
                .map((v2) => Number(v2))
                .concat([i++])
        )
        .sort((a, b) => {
            if (a[0] > b[0]) return 1;
            else if (a[0] < b[0]) return -1;
            else {
                if (a[1] > b[1]) return 1;
                else if (a[1] < b[1]) return -1;
                else return 0;
            }
        });
    const result = [];
    console.log(dates);
    let prev = [0, 0];
    for (let date of dates) {
        if (date[0] > prev[1]) {
            result[date[2]] = date.slice(0, 2);
            prev = date;
        } else if (date[0] <= prev[1] && date[1] > prev[1]) {
            result[date[2]] = [++prev[1], date[1]];
            prev = date;
        } else result[date[2]] = [-1, -1];
    }

    console.log('res', result);
    return result.map((v) => v.join(' ')).join('\n');
};

function main() {
    // console.log(
    //     solotion(`3
    // 1 2
    // 2 4
    // 3 5`)
    // );
    // console.log(
    //     solotion(`3
    // 2 3
    // 1 4
    // 3 5`)
    // );
    // console.log(
    //     solotion(`3
    // 2 3
    // 1 4
    // 1 3
    // 3 5`)
    // );
    // console.log(
    //     solotion(`5
    // 1 9
    // 2 3
    // 3 4
    // 10 15
    // 16 17`)
    // );
    console.log(
        solotion(`5
    3 3
    3 6
    3 3
    10 15
    16 17`)
    );
}
if (require.main === module) {
    main();
}
