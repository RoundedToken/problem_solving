const garland = (str) => {
    let [params, ...colors] = str.split('\n').map((v) => v.trim());
    let maxCount = 0;
    colors = colors.map((n) => {
        maxCount += Number(n);
        return Number(n);
    });
    const [l, k] = params.trim().split(' ');
    maxCount = Math.floor(maxCount / l);

    draw = (count) => {
        const gar = [];

        for (let ind in colors) {
            let colorCount = colors[ind];

            while (colorCount > 0) {
                colorCount -= count;
                if (colorCount >= 0) gar.push(Number(ind) + 1);

                if (gar.length == l) return { isTrue: true, gar };
            }
        }

        return { isTrue: false };
    };

    search = () => {
        let start = 0;
        let end = maxCount;
        let result;

        while (start <= end) {
            const mid = Math.floor((start + end) / 2);

            const output = draw(mid);

            if (output.isTrue) {
                result = output.gar;
                start = mid + 1;
            } else {
                end = mid - 1;
            }
        }

        // console.log('start', start);
        // console.log('end', end);
        return { end, result };
    };

    const result = search();

    return `${result.end}\n${result.result.join('\n')}`;
};

function main() {
    console.log(
        garland(`3 4
    3
    3
    2
    1`)
    );
    // console.log('-------');
    console.log(
        garland(`4 3
    4
    4
    40
    4`)
    );
    console.log('-------');
    console.log(
        garland(`3 4
    20
    30
    3
    3`)
    );
    console.log('-------');
    console.log(
        garland(`6 7
    1
    1
    1
    1
    1
    1
    1`)
    );
    console.log('-------');
    console.log(
        garland(`6 7
    1
    1
    1
    1
    1`)
    );
    console.log('-------');
}
if (require.main === module) {
    main();
}
