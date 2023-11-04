const timeDiff = (times) => {
    if (times.length === 1) return 0;
    const allMinutes = 60 * 24;
    const set = new Set();

    for (let time of times) {
        const arr = time.split(':');
        const minutes = +arr[0] * 60 + +arr[1];

        if (set.has(minutes)) return 0;
        else set.add(minutes);
    }

    const sorted = Array.from(set).sort((a, b) => a - b);

    let minDiff = allMinutes - sorted.at(-1) + sorted[0];

    for (let i = 1; i < sorted.length; i++) {
        const diff = sorted[i] - sorted[i - 1];
        if (diff < minDiff) minDiff = diff;
    }

    return minDiff;
};

function main() {
    console.log(timeDiff(['00:00', '23:58', '00:03', '01:00']));
    console.log(timeDiff(['00:00', '23:02', '22:03']));
    console.log(timeDiff(['00:00']));
}
if (require.main === module) {
    main();
}
