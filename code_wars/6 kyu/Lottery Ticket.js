// https://www.codewars.com/kata/57f625992f4d53c24200070e/train/javascript

function bingo(ticket, win) {
    return ticket.reduce((prev, curr) => {
        return curr[0]
            .split('')
            .map((char) => char.charCodeAt())
            .includes(curr[1])
            ? ++prev
            : prev;
    }, (prev = 0)) < win
        ? 'Loser!'
        : 'Winner!';
}

function main() {
    console.log(
        bingo(
            [
                ['ABC', 65],
                ['HGR', 74],
                ['BYHT', 74],
            ],
            2
        )
    );
}
if (require.main === module) {
    main();
}

// assert.strictEqual(bingo([['ABC', 65], ['HGR', 74], ['BYHT', 74]], 2), 'Loser!');
// assert.strictEqual(bingo([['ABC', 65], ['HGR', 74], ['BYHT', 74]], 1), 'Winner!');
// assert.strictEqual(bingo([['HGTYRE', 74], ['BE', 66], ['JKTY', 74]], 3), 'Loser!');
