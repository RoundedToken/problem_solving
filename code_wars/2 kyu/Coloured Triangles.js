// https://www.codewars.com/kata/5a25ac6ac5e284cfbe000111/train/javascript

function triangle(row) {
    const pattern = {
        BB: 'B',
        BG: 'R',
        BR: 'G',
        GG: 'G',
        GB: 'R',
        GR: 'B',
        RR: 'R',
        RB: 'G',
        RG: 'B',
    };

    let l = row.length;

    while (l > 1) {
        let newRow = '';

        if (l >= 59050)
            for (let i = 0; i <= l - 59050; i++) newRow += pattern[row[i] + row[i + 59049]];
        else if (l >= 19684)
            for (let i = 0; i <= l - 19684; i++) newRow += pattern[row[i] + row[i + 19683]];
        else if (l >= 6562)
            for (let i = 0; i <= l - 6562; i++) newRow += pattern[row[i] + row[i + 6561]];
        else if (l >= 2188)
            for (let i = 0; i <= l - 2188; i++) newRow += pattern[row[i] + row[i + 2187]];
        else if (l >= 730)
            for (let i = 0; i <= l - 730; i++) newRow += pattern[row[i] + row[i + 729]];
        else if (l >= 244)
            for (let i = 0; i <= l - 244; i++) newRow += pattern[row[i] + row[i + 243]];
        else if (l >= 82) for (let i = 0; i <= l - 82; i++) newRow += pattern[row[i] + row[i + 81]];
        else if (l >= 28) for (let i = 0; i <= l - 28; i++) newRow += pattern[row[i] + row[i + 27]];
        else if (l >= 10) for (let i = 0; i <= l - 10; i++) newRow += pattern[row[i] + row[i + 9]];
        else if (l >= 4) for (let i = 0; i <= l - 4; i++) newRow += pattern[row[i] + row[i + 3]];
        else for (let i = 0; i <= l - 2; i++) newRow += pattern[row[i] + row[i + 1]];

        row = newRow;
        l = row.length;
    }

    return row;
}

function main() {
    let row = 'RGRB'.repeat(10009);
    console.log(triangle(row));
}
if (require.main === module) {
    main();
}
