const solution = (input) => {
    let [x1, y1, x2, y2] = input.trim().split(' ');
    x1 = +x1;
    y1 = +y1;
    x2 = +x2;
    y2 = +y2;

    let r1 = Math.hypot(x1, y1);
    let r2 = Math.hypot(x2, y2);
    const rA = Math.atan2(y1, x1);
    const rB = Math.atan2(y2, x2);

    if (x1 === x2 && y1 === y2) {
        return 0;
    }

    // Точки на одном радиусе
    if (x1 * y2 - x2 * y1 === 0) {
        return Math.hypot(x2 - x1, y2 - y1);
    }

    // Точки на одной окружности
    if (r1 === r2) {
        let angle = Math.abs(rA - rB);

        let arc = Math.min(angle > Math.PI ? 2 * Math.PI - angle : angle * r1, 2 * r1);
        return arc;
    }

    let rMax, rMin;
    if (r1 > r2) {
        rMax = r1;
        rMin = r2;
    } else {
        rMax = r2;
        rMin = r1;
    }

    let angle = Math.abs(rA - rB);
    angle = angle > Math.PI ? 2 * Math.PI - angle : angle;
    const d1 = angle * rMin + (rMax - rMin);
    const d2 = rMax + rMin;

    const minDist = Math.min(d1, d2);
    return minDist;
};

function main() {
    console.log(solution(`0 5 4 3`));
    console.log(solution(`2 5 0 0`));
    console.log(solution(`-3 2 -3 -2`));
    console.log(solution(`0 1 0 -3`)); //на одном радиусе
    console.log(solution(`-1 10 1 10`));
    console.log(solution(`1 10 -1 10`));
    console.log(solution(`10 -1 10 1`));
    console.log(solution(`10 1 10 -1`));
    console.log(solution(`1 0 1 1`));
}
if (require.main === module) {
    main();
}
