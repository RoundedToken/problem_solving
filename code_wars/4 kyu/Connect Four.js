// https://www.codewars.com/kata/56882731514ec3ec3d000009/train/javascript

function check(field) {
    for (let row = 5; row >= 0; row--) {
        for (let col = 6; col >= 0; col--) {
            const color = field[row][col];
            if (color === '.') continue;
            const colorName = color == 'Y' ? 'Yellow' : 'Red';
            //horizontal
            if (col > 2) {
                let line = 0;
                let pos = [row, col];
                while (pos[1] > -1 && field[pos[0]][pos[1]] === color) {
                    line++;
                    pos[1]--;
                }
                if (line >= 4) return colorName;
            }
            //vertical
            if (row > 2) {
                let line = 0;
                let pos = [row, col];
                while (pos[0] > -1 && field[pos[0]][pos[1]] === color) {
                    line++;
                    pos[0]--;
                }
                if (line >= 4) return colorName;
            }
            //diagonal right
            if (row > 2 && col < 4) {
                let line = 0;
                let pos = [row, col];
                while (pos[0] > -1 && pos[1] < 7 && field[pos[0]][pos[1]] === color) {
                    line++;
                    pos[0]--;
                    pos[1]++;
                }
                if (line >= 4) return colorName;
            }
            //diagonal left
            if (row > 2 && col > 2) {
                let line = 0;
                let pos = [row, col];
                while (pos[0] > -1 && pos[1] > -1 && field[pos[0]][pos[1]] === color) {
                    line++;
                    pos[0]--;
                    pos[1]--;
                }
                if (line >= 4) return colorName;
            }
        }
    }
}

function whoIsWinner(piecesPositionList) {
    const values = { A: 0, B: 1, C: 2, D: 3, E: 4, F: 5, G: 6 };
    const field = Array(6)
        .fill(0)
        .map((v) => (v = Array(7).fill('.')));
    for (let v of piecesPositionList) {
        let value = values[v.split('_')[0]];
        let color = v.split('_')[1][0];
        for (let i = 5; i >= 0; i--) {
            if (field[i][value] === '.') {
                field[i][value] = color;
                break;
            }
        }
        const col = check(field);
        if (col) return col;
    }

    console.table(field);

    return 'Draw';
}

function main() {
    const piecesPositionList = [
        'G_Red',
        'A_Yellow',
        'D_Red',
        'C_Yellow',
        'B_Red',
        'B_Yellow',
        'B_Red',
        'E_Yellow',
        'B_Red',
        'E_Yellow',
        'G_Red',
        'A_Yellow',
        'B_Red',
        'D_Yellow',
        'E_Red',
        'D_Yellow',
        'D_Red',
        'G_Yellow',
        'G_Red',
        'F_Yellow',
        'G_Red',
        'F_Yellow',
        'E_Red',
        'F_Yellow',
        'F_Red',
        'A_Yellow',
        'E_Red',
        'B_Yellow',
    ];
    console.log(whoIsWinner(piecesPositionList));
}
if (require.main === module) {
    main();
}
