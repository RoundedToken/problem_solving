// https://leetcode.com/problems/valid-sudoku/

const isValid = (arr) => {
    const set = new Set();
    for (const el of arr) {
        if (el !== '.') {
            if (set.has(el)) return false;
            set.add(el);
        }
    }
    return true;
};

const fillEntetees = (board, cols, squares) => {
    for (let rowInd = 0; rowInd < board.length; rowInd++) {
        const row = board[rowInd];

        for (let colInd = 0; colInd < row.length; colInd++) {
            val = row[colInd];

            cols[colInd].push(val);
            squares[Math.floor(rowInd / 3) * 3 + Math.floor(colInd / 3)].push(val);
        }
    }
};

const isValidRows = (rows) => {
    for (const row of rows) {
        if (!isValid(row)) return false;
    }
    return true;
};

var isValidSudoku = function (board) {
    const cols = Array(9)
        .fill()
        .map(() => []);
    const squares = Array(9)
        .fill()
        .map(() => []);
    fillEntetees(board, cols, squares);

    return isValidRows(board) && isValidRows(cols) && isValidRows(squares);
};

function main() {
    console.log(
        isValidSudoku([
            ['5', '3', '.', '.', '7', '.', '.', '.', '.'],
            ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
            ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
            ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
            ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
            ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
            ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
            ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
            ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
        ])
    );
}
if (require.main === module) {
    main();
}
