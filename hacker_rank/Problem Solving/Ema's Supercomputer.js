// https://www.hackerrank.com/challenges/two-pluses/problem?isFullScreen=true&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen
function twoPluses(grid) {
    let lRow = grid.length;
    let lCol = grid[0].length;
    let max = 0;
    let SUM;
    for (let i = 0; i < lRow; i++) {
        grid[i] = grid[i].split("");
    }
    let startGrid = createGrid();
    startGrid = grid1ToGrid2(grid, startGrid);
    console.table(vision(grid))
    grid = grid1ToGrid2(startGrid, grid);
    function createGrid() {
        let area2 = Array(lRow);
        for (let i = 0; i < lRow; i++) {
            area2[i] = Array(lCol);
        }
        return area2
    }
    function grid1ToGrid2(IN, OUT) {
        for (let i = 0; i < lRow; i++) {
            for (let g = 0; g < lCol; g++) {
                OUT[i][g] = IN[i][g]
            }
        }
        return OUT
    }
    function vision(area) {
        for (let i = 0; i < lRow; i++) {
            for (let g = 0; g < lCol; g++) {
                if (area[i][g] == "G") area[i][g] = " ";
                else area[i][g] = "X";
            }
        }
        return area
    }
    function sumX(y1, x1, y2, x2, area) {
        let S1 = 1;
        let S2 = 1;
        let dis1 = 1;
        let pos1 = 0;
        let dis2 = 1;
        let pos2 = 0;
        let flag1 = true;
        let flag2 = true;
        for (; ;) {
            if (y1 - pos1 <= 0 || area[y1 - dis1][x1] == "B" ||
                y1 + pos1 >= lRow - 1 || area[y1 + dis1][x1] == "B" ||
                x1 - pos1 <= 0 || area[y1][x1 - dis1] == "B" ||
                x1 + pos1 >= lCol - 1 || area[y1][x1 + dis1] == "B") flag1 = false;
            if (flag1) {
                area[y1][x1] = "B";
                area[y1][x1 - dis1] = "B";
                area[y1][x1 + dis1] = "B";
                area[y1 - dis1][x1] = "B";
                area[y1 + dis1][x1] = "B";
                pos1 = dis1;
                dis1++;
                S1 += 4;
            }
            if (y2 - pos2 <= 0 || area[y2 - dis2][x2] == "B" ||
                y2 + pos2 >= lRow - 1 || area[y2 + dis2][x2] == "B" ||
                x2 - pos2 <= 0 || area[y2][x2 - dis2] == "B" ||
                x2 + pos2 >= lCol - 1 || area[y2][x2 + dis2] == "B") flag2 = false
            if (flag2) {
                area[y2][x2] = "B";
                area[y2][x2 - dis2] = "B";
                area[y2][x2 + dis2] = "B";
                area[y2 - dis2][x2] = "B";
                area[y2 + dis2][x2] = "B";
                pos2 = dis2;
                dis2++;
                S2 += 4;
            }
            if (flag1 == false && flag2 == false) break
        }
        return S1 * S2
    }
    for (let i = 0; i < lRow; i++) {
        for (let g = 0; g < lCol; g++) {
            if (grid[i][g] == "G") {
                for (let k = 0; k < lRow; k++) {
                    for (let j = 0; j < lCol; j++) {
                        if (grid[k][j] == "G") {
                            SUM = sumX(i, g, k, j, grid);
                            if (SUM > max) max = SUM;
                            grid = grid1ToGrid2(startGrid, grid);
                        }
                    }
                }
            }
        }
    }
    return max
}
function main() {
    let grid = ["GGGGGGGGGGGG",
        "GGGGGGGGGGGG",
        "BGBGGGBGBGBG",
        "BGBGGGBGBGBG",
        "GGGGGGGGGGGG",
        "GGGGGGGGGGGG",
        "GGGGGGGGGGGG",
        "GGGGGGGGGGGG",
        "BGBGGGBGBGBG",
        "BGBGGGBGBGBG",
        "BGBGGGBGBGBG",
        "BGBGGGBGBGBG",
        "GGGGGGGGGGGG",
        "GGGGGGGGGGGG"]
    console.log(twoPluses(grid));
}
if (require.main === module) {
    main();
}