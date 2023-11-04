const solution = (str) => {
    str = str.trim();
    let leftPos = 0;
    let rightPos = str.length - 1;
    let count = 0;

    while (leftPos < rightPos) {
        const leftCurr = str[leftPos];
        const rightCurr = str[rightPos];
        const leftPrev = str[leftPos - 1];
        const rightPrev = str[rightPos + 1];

        if (leftCurr === rightCurr) {
            leftPos++;
            rightPos--;
            count += 2;
        } else if (leftCurr === rightPrev) {
            leftPos++;
            count++;
        } else if (rightCurr === leftPrev) {
            rightPos--;
            count++;
        } else break;
    }

    return str.length - count;
};

function main() {
    console.log(solution('abba'));
    console.log(solution('aboba'));
    console.log(solution('zzzaabxxxcazz'));
}
if (require.main === module) {
    main();
}
