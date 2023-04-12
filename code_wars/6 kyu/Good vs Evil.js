// https://www.codewars.com/kata/52761ee4cffbc69732000738/train/javascript

function goodVsEvil(good, evil) {
    const goodValues = [1, 2, 3, 3, 4, 10];
    const evilValues = [1, 2, 2, 2, 3, 5, 10];

    const goodWorth = good.split(' ').reduce((prev, cur, ind) => {
        return (prev += goodValues[ind] * Number(cur));
    }, (prev = 0));
    const evilWorth = evil.split(' ').reduce((prev, cur, ind) => {
        return (prev += evilValues[ind] * Number(cur));
    }, (prev = 0));

    if (goodWorth > evilWorth) {
        return 'Battle Result: Good triumphs over Evil';
    } else if (evilWorth > goodWorth) {
        return 'Battle Result: Evil eradicates all trace of Good';
    } else return 'Battle Result: No victor on this battle field';
}

function main() {
    const good = '1 1 1 1 1 1';
    const evil = '1 1 1 1 1 1 1';
    console.log(goodVsEvil(good, evil));
}
if (require.main === module) {
    main();
}
