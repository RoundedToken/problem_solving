// https://www.codewars.com/kata/540afbe2dc9f615d5e000425/train/javascript

function compare(arrOrig, arr) {
    for (let i in arrOrig) {
        if (arrOrig[i] !== arr[i]) return false;
    }

    return true;
}

var Sudoku = function (data) {
    const length = data.length;
    const root = Math.sqrt(length);
    const collection = Array(length)
        .fill()
        .map((_, i) => i + 1);

    function isNxN() {
        if (length < 1 || Number.isInteger(root))
            for (let row of data) {
                if (row.length !== length) return false;
            }
        return true;
    }

    function isHorizontal() {
        for (let row of data) {
            const candidate = [];
            for (let col of row) candidate.push(col);
            candidate.sort((a, b) => a - b);
            if (!compare(collection, candidate)) return false;
        }

        return true;
    }

    function isVertical() {
        for (let col in data) {
            const candidate = [];
            for (let row in data) candidate.push(data[row][col]);
            candidate.sort((a, b) => a - b);
            if (!compare(collection, candidate)) return false;
        }

        return true;
    }

    function isSquare() {
        for (let row = 0; row <= length - root; row += root) {
            for (let col = 0; col <= length - root; col += root) {
                const square = [];
                for (let sRow = 0; sRow < root; sRow++) {
                    for (let sCol = 0; sCol < root; sCol++) {
                        square.push(data[row + sRow][col + sCol]);
                    }
                }
                square.sort((a, b) => a - b);
                if (!compare(collection, square)) return false;
            }
        }
        return true;
    }

    return {
        isValid: function () {
            return isNxN()
                ? isHorizontal()
                    ? isVertical()
                        ? isSquare()
                            ? true
                            : false
                        : false
                    : false
                : false;
        },
    };
};

function main() {
    const sudoku = new Sudoku([
        [7, 8, 4, 1, 5, 9, 3, 2, 6],
        [5, 3, 9, 6, 7, 2, 8, 4, 1],
        [6, 1, 2, 4, 3, 8, 7, 5, 9],

        [9, 2, 8, 7, 1, 5, 4, 6, 3],
        [3, 5, 7, 8, 4, 6, 1, 9, 2],
        [4, 6, 1, 9, 2, 3, 5, 8, 7],

        [8, 7, 6, 3, 9, 4, 2, 1, 5],
        [2, 4, 3, 5, 6, 1, 9, 7, 8],
        [1, 9, 5, 2, 8, 7, 6, 3, 4],
    ]);
    console.log(sudoku.isValid());
}
if (require.main === module) {
    main();
}
