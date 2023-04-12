// https://www.hackerrank.com/challenges/bomber-man/problem?isFullScreen=true&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen
function bomberMan(n, grid) {
    let flag = true;
    let lRow = grid.length;
    let lCol = grid[0].length
    let bomb;
    for (let i = 0; i < lRow; i++) {
        grid[i] = grid[i].split("")
    }
    function detonate(area) {
        if (flag) bomb = "X"; else bomb = "O";
        for (let i = 0; i < lRow; i++) {
            for (let g = 0; g < lCol; g++) {
                if (area[i][g] == ".") area[i][g] = bomb;
            }
        }
        return area;
    }
    function explo(area) {
        if (flag) bomb = "X"; else bomb = "O";
        for (let i = 0; i < lRow; i++) {
            for (let g = 0; g < lCol; g++) {
                if (area[i][g] == bomb) {
                    area[i][g] = ".";
                    if (i > 0 && area[i - 1][g] != bomb) area[i - 1][g] = ".";
                    if (i < lRow - 1 && area[i + 1][g] != bomb) area[i + 1][g] = ".";
                    if (g > 0 && area[i][g - 1] != bomb) area[i][g - 1] = ".";
                    if (g < lCol - 1 && area[i][g + 1] != bomb) area[i][g + 1] = "."
                }
            }
        }
        return area
    }
    function reverse(area) {
        for (let i = 0; i < lRow; i++) {
            for (let g = 0; g < lCol; g++) {
                if (area[i][g] == "X") area[i][g] = "O";
            }
        }
        return area
    }
    function toString(area) {
        for (let i = 0; i < lRow; i++) {
            area[i] = area[i].join("")
        }
        return area
    }
    if (n == 1) return toString(grid)
    if (n % 4 == 1) {
        detonate(grid);
        flag = false;
        explo(grid);
        detonate(grid);
        flag = true;
        explo(grid);
        console.table(grid)
        return toString(grid)
    }
    else if (n % 4 == 2 || n % 4 == 0) {
        flag = false;
        detonate(grid);
        console.table(grid)
        return toString(grid)
    }
    else  {
        detonate(grid);
        flag = false;
        explo(grid);
        reverse(grid);
        console.table(grid)
        return toString(grid)
    } 
}
function main() {
    let grid = [ '.......', '...O.O.', '....O..', '..O....', 'OO...OO', 'OO.O...' ]
    let n = 7;
    console.log(bomberMan(n, grid));
}
if (require.main === module) {
    main();
}