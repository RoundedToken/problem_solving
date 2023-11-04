const cows = (str) => {
    let [params, cows] = str.split('\n');
    let cowsCount = params.trim().split(' ')[1] - 2;
    cows = cows
        .trim()
        .split(' ')
        .map((n) => Number(n));
    let idealL = Math.floor((cows.at(-1) - cows[0]) / (cowsCount + 1));

    console.log('cC=', cowsCount);
    console.log('L=', idealL);
    console.log(cows);

    pushCows = (minL) => {
        let leftPos = 0;
        let endPos = cows.length - 1;
        let pos = 1;
        let count = cowsCount;

        while (count > 0 && pos < endPos) {
            const diff = cows[pos] - cows[leftPos];

            if (diff >= minL) {
                leftPos = pos;
                count--;
            }

            pos++;
        }

        return count === 0 && cows[endPos] - cows[leftPos] >= minL ? true : false;
    };

    search = () => {
        let start = 1;
        let end = idealL;

        while (start <= end) {
            const mid = Math.floor((start + end) / 2);
            // console.log(mid);
            // console.log(pushCows(mid));
            if (pushCows(mid)) {
                start = mid + 1;
            } else {
                end = mid - 1;
            }
        }

        return end;
    };

    return search();
};

function main() {
    console.log(
        cows(`4 3
    0 5 200 201`)
    );
    console.log('------');
    console.log(
        cows(`6 5
    0 10 20 30 99 100`)
    );
    console.log('------');
    console.log(
        cows(`6 4
    0 2 4 6 8 100`)
    );
    console.log('------');
    console.log(
        cows(`6 4
    1 2 4 100`)
    );
    console.log('------');
    console.log(
        cows(`6 4
    1 2 3 100`)
    );
    console.log('------');
    console.log(
        cows(`6 3
    2 5 7 11 15 20`)
    );
    console.log('------');
    console.log(
        cows(`6 4
    2 5 7 11 15 20`)
    );
    console.log('------');
    console.log(
        cows(`6 4
    2 5 6 11 16 21`)
    );
    console.log('------');
    console.log(
        cows(`6 3
    1 2000 20002 20003`)
    );
    console.log('------');
    console.log(
        cows(`6 2
    1 20003`)
    );
}
if (require.main === module) {
    main();
}
