// https://www.codewars.com/kata/5296bc77afba8baa690002d7/train/javascript
function sudoku(puzzle) {
    let solution = Array.from(puzzle);
    for (let i in solution) {
        for (let g in solution[i]) {
            if (solution[i][g] == 0) solution[i][g] = new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]);
        }
    }
    function solve(solution) {
        let flag = true;
        for (let i in solution) {
            for (let g in solution[i]) {
                if (typeof solution[i][g] == "object") {
                    flag = false;

                    let row;
                    let col;
                    if (Number(i) > 5) row = [6, 8];
                    else if (Number(i) < 3) row = [0, 2];
                    else row = [3, 5];
                    if (Number(g) > 5) col = [6, 8];
                    else if (Number(g) < 3) col = [0, 2];
                    else col = [3, 5];

                    for (let j of solution[i]) {
                        if (typeof j == "number") solution[i][g].delete(j);
                    }

                    for (let j in solution[i]) {
                        if (typeof solution[j][g] == "number") solution[i][g].delete(solution[j][g]);
                    }

                    for (let j = row[0]; j <= row[1]; j++) {
                        for (let k = col[0]; k <= col[1]; k++) {
                            if (typeof solution[j][k] == "number") solution[i][g].delete(solution[j][k]);
                        }
                    }

                    if (solution[i][g].size == 1) solution[i][g] = Array.from(solution[i][g])[0];
                }
            }
        }
        return flag
    }
    let stop = false;
    while (stop == false) {
       stop = solve(solution)
    }
    console.table(solution)
    return solution

}
function main() {
    let puzzle = [
        [5, 3, 0, 0, 7, 0, 0, 0, 0],
        [6, 0, 0, 1, 9, 5, 0, 0, 0],
        [0, 9, 8, 0, 0, 0, 0, 6, 0],
        [8, 0, 0, 0, 6, 0, 0, 0, 3],
        [4, 0, 0, 8, 0, 3, 0, 0, 1],
        [7, 0, 0, 0, 2, 0, 0, 0, 6],
        [0, 6, 0, 0, 0, 0, 2, 8, 0],
        [0, 0, 0, 4, 1, 9, 0, 0, 5],
        [0, 0, 0, 0, 8, 0, 0, 7, 9]];
    console.log(sudoku(puzzle));
}
if (require.main === module) {
    main();
}