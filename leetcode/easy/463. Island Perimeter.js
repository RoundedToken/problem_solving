// https://leetcode.com/problems/island-perimeter/description/?envType=daily-question&envId=2024-04-18

var islandPerimeter = function (grid) {
    let p = 0;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] == 1) {
                if (i == 0) p++;
                if (i == grid.length - 1) p++;

                if (j == 0) p++;
                if (j == grid[i].length - 1) p++;

                if (grid[i][j - 1] == 0) p++;
                if (grid[i][j + 1] == 0) p++;

                if (grid[i + 1] && grid[i + 1][j] == 0) p++;
                if (grid[i - 1] && grid[i - 1][j] == 0) p++;
            }
        }
    }
    return p;
};
