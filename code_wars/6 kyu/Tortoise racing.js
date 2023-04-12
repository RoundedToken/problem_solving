// https://www.codewars.com/kata/55e2adece53b4cdcb900006c/train/javascript

function race(v1, v2, g) {
    if (v2 <= v1) return null;
    let answer = ~~((g / (v2 - v1)) * 3600);
    const time = [0, 0, 0];
    time[0] += Math.floor(answer / 3600);
    answer -= 3600 * time[0];
    time[1] += Math.floor(answer / 60);
    time[2] = answer - 60 * time[1];
    return time;
}

function main() {
    let v1 = 720;
    let v2 = 850;
    let g = 70;
    console.log(race(v1, v2, g));
}
if (require.main === module) {
    main();
}

// race(720, 850, 70) => [0, 32, 18] or "0 32 18"
// race(80, 91, 37)   => [3, 21, 49] or "3 21 49"
