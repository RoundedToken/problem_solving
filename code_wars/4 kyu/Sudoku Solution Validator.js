// https://www.codewars.com/kata/529bf0e9bdf7657179000008/train/javascript
function validSolution(board) {
    for (let i of board) {
        let set = new Set(i);
        if (set.size != 9 || set.has(0)) {
            console.log(i)
            return false
        }
    }
    for (let i = 0; i < board.length; i++) {
        let set = new Set();
        for (let g = 0; g < board.length; g++) {
            set.add(board[g][i]);
        }
        if (set.size != 9 || set.has(0)) {
            return false
        }
    }
    for (let i = 0; i <= 6; i += 3) {
        for (let g = 0; g <= 6; g += 3) {
            let set = new Set();
            for (let k = i; k < i + 3; k++) {
                for (let j = g; j < g + 3; j++) {
                    set.add(board[k][j]);
                }
            }
            if (set.size != 9 || set.has(0)) return false
        }
    }
    return true
}


function main() {
    let board = [[5, 3, 4, 6, 7, 8, 9, 1, 2],
    [6, 7, 2, 1, 9, 5, 3, 4, 8],
    [1, 9, 8, 3, 4, 2, 5, 6, 7],
    [8, 5, 9, 7, 6, 1, 4, 2, 3],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 6, 1, 5, 3, 7, 2, 8, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 4, 5, 2, 8, 6, 1, 7, 9]];
    console.log(validSolution(board));
}
if (require.main === module) {
    main();
}