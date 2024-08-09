// https://leetcode.com/problems/magic-squares-in-grid/description/

const numMagicSquaresInside = (grid) => {
  const magicSquares = new Set(['276951438', '294753618', '438951276', '492357816', '618753294', '672159834', '816357492', '834159672']);
  let cnt = 0;
  for (let i = 0; i < grid.length - 2; i++)
    for (let j = 0; j < grid[0].length - 2; j++)
      if (
        magicSquares.has(
          grid[i][j].toString() +
            grid[i][j + 1] +
            grid[i][j + 2] +
            grid[i + 1][j] +
            grid[i + 1][j + 1] +
            grid[i + 1][j + 2] +
            grid[i + 2][j] +
            grid[i + 2][j + 1] +
            grid[i + 2][j + 2]
        )
      )
        cnt++;
  return cnt;
};
