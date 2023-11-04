const invitationCount = (str) => {
    const arr = str.trim().split(' ');
    const ages = [];
    for (let el of arr) {
        if (el > 14) ages.push(Number(el));
    }
    ages.sort((a, b) => a - b);

    let totalCount = 0;
    let g = 1;

    for (let i = 0; i < ages.length - 1; i++) {
        const x = ages[i];
        let y = ages[g];
        let half = y / 2 + 7;
        totalCount += g - i - 1;

        while ((x > half || i === g - 1) && g <= ages.length - 1) {
            if (y === x) totalCount += 2;
            else totalCount++;

            g++;
            y = ages[g];
            half = y / 2 + 7;
        }
    }

    return totalCount;
};

function main() {
    console.log(invitationCount('14 14'));
    console.log(invitationCount('16 16'));
    console.log(invitationCount('16 17 18'));
    console.log(invitationCount('120 25 30 100 105'));
    console.log(invitationCount('19 20 21 22 23 30 40 50 60 70 80 90 100 110'));
}
if (require.main === module) {
    main();
}
