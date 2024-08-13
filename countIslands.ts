type TGrid = Array<Array<0 | 1>>;

function countIslands(gridForCopy: TGrid) {
  const grid = gridForCopy.map((raw) => raw.map((col) => col));
  const gridWidth = grid[0].length;
  const gridHeight = grid.length;
  let islandCount = 0;

  const visitedGrid: TGrid = Array(gridHeight)
    .fill(0)
    .map(() => Array(gridWidth).fill(0));

  function islandWalking(rowIndex: number, colIndex: number) {
    if (rowIndex < 0 || colIndex < 0 || rowIndex >= gridHeight || colIndex >= gridWidth) {
      return;
    }

    const isVisited = visitedGrid[rowIndex][colIndex];
    const isIslandCell = grid[rowIndex][colIndex];

    if (isVisited || !isIslandCell) {
      return;
    }

    visitedGrid[rowIndex][colIndex] = 1;

    islandWalking(rowIndex - 1, colIndex);
    islandWalking(rowIndex + 1, colIndex);
    islandWalking(rowIndex, colIndex - 1);
    islandWalking(rowIndex, colIndex + 1);
    islandWalking(rowIndex - 1, colIndex - 1);
    islandWalking(rowIndex - 1, colIndex + 1);
    islandWalking(rowIndex + 1, colIndex - 1);
    islandWalking(rowIndex + 1, colIndex + 1);
  }

  for (let rowIndex = 0; rowIndex < gridHeight; rowIndex++) {
    for (let colIndex = 0; colIndex < gridWidth; colIndex++) {
      const isVisited = visitedGrid[rowIndex][colIndex];
      const isIslandCell = grid[rowIndex][colIndex];

      if (isIslandCell && !isVisited) {
        islandCount++;
        islandWalking(rowIndex, colIndex);
      }
    }
  }

  return islandCount;
}

function countIslands2(gridForCopy: TGrid) {
  const grid = gridForCopy.map((raw) => raw.map((col) => col));
  const gridWidth = grid[0].length;
  const gridHeight = grid.length;
  let islandCount = 0;
  let islandCells = 0;

  function islandWalking(rowIndex: number, colIndex: number) {
    if (rowIndex < 0 || colIndex < 0 || rowIndex >= gridHeight || colIndex >= gridWidth || !grid[rowIndex][colIndex]) {
      return;
    }

    grid[rowIndex][colIndex] = 0;
    islandCells++;

    islandWalking(rowIndex - 1, colIndex);
    islandWalking(rowIndex + 1, colIndex);
    islandWalking(rowIndex, colIndex - 1);
    islandWalking(rowIndex, colIndex + 1);
    islandWalking(rowIndex - 1, colIndex - 1);
    islandWalking(rowIndex - 1, colIndex + 1);
    islandWalking(rowIndex + 1, colIndex - 1);
    islandWalking(rowIndex + 1, colIndex + 1);
  }

  for (let rowIndex = 0; rowIndex < gridHeight; rowIndex++) {
    for (let colIndex = 0; colIndex < gridWidth; colIndex++) {
      const isIslandCell = grid[rowIndex][colIndex];

      if (isIslandCell) {
        islandCount++;
        islandWalking(rowIndex, colIndex);
      }
    }
  }

  if (islandCells === gridWidth * gridHeight) {
    return 0;
  }

  return islandCount;
}

//Говно тормознутое, зато нет лимита стека вызовов
function countIslands3(gridForCopy: TGrid) {
  const grid = gridForCopy.map((raw) => raw.map((col) => col));
  const gridWidth = grid[0].length;
  const gridHeight = grid.length;
  let islandCount = 0;
  let islandCells = 0;

  function islandWalking(rowIndex: number, colIndex: number) {
    const stack = [[rowIndex, colIndex]];
    const directions = [
      [0, 1],
      [1, 0],
      [0, -1],
      [-1, 0],
      [1, 1],
      [1, -1],
      [-1, 1],
      [-1, -1],
    ];

    while (stack.length) {
      const currentIndexes = stack.pop();

      if (currentIndexes) {
        const [rowIndex, colIndex] = currentIndexes;

        if (rowIndex < 0 || colIndex < 0 || rowIndex >= gridHeight || colIndex >= gridWidth || !grid[rowIndex][colIndex]) {
          continue;
        }

        grid[rowIndex][colIndex] = 0;
        islandCells++;

        for (const [horizontalDir, verticalDir] of directions) {
          stack.push([rowIndex + horizontalDir, colIndex + verticalDir]);
        }
      }
    }
  }

  for (let rowIndex = 0; rowIndex < gridHeight; rowIndex++) {
    for (let colIndex = 0; colIndex < gridWidth; colIndex++) {
      const isIslandCell = grid[rowIndex][colIndex];

      if (isIslandCell) {
        islandCount++;
        islandWalking(rowIndex, colIndex);
      }
    }
  }

  if (islandCells === gridWidth * gridHeight) {
    return 0;
  }

  return islandCount;
}

function countIslands4(gridForCopy: TGrid) {
  const grid = gridForCopy.map((raw) => raw.map((col) => col));
  console.table(grid);
  const gridWidth = grid[0].length;
  const gridHeight = grid.length;
  let islandCount = 0;
  let islandCells = 0;
  const directions = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
    [1, 1],
    [1, -1],
    [-1, 1],
    [-1, -1],
  ];

  function islandWalking(rowIndex: number, colIndex: number, prevDir = [0, 0]) {
    if (rowIndex < 0 || colIndex < 0 || rowIndex >= gridHeight || colIndex >= gridWidth || !grid[rowIndex][colIndex]) {
      return;
    }

    grid[rowIndex][colIndex] = 0;
    islandCells++;

    const [prevRowIndex, prevColIndex] = prevDir;

    if ((prevRowIndex === 0 && prevColIndex === 0) || !(prevRowIndex === -1 && prevColIndex === 0)) islandWalking(rowIndex + 1, colIndex, [1, 0]);

    if ((prevRowIndex === 0 && prevColIndex === 0) || !(prevRowIndex === 1 && prevColIndex === 0)) islandWalking(rowIndex - 1, colIndex, [-1, 0]);

    if ((prevRowIndex === 0 && prevColIndex === 0) || !(prevRowIndex === 0 && prevColIndex === 1)) islandWalking(rowIndex, colIndex - 1, [0, -1]);

    if ((prevRowIndex === 0 && prevColIndex === 0) || !(prevRowIndex === 0 && prevColIndex === -1)) islandWalking(rowIndex, colIndex + 1, [0, 1]);

    if ((prevRowIndex === 0 && prevColIndex === 0) || !(prevRowIndex === -1 && prevColIndex === -1)) islandWalking(rowIndex - 1, colIndex - 1, [-1, -1]);

    if ((prevRowIndex === 0 && prevColIndex === 0) || !(prevRowIndex === 1 && prevColIndex === -1)) islandWalking(rowIndex - 1, colIndex + 1, [-1, 1]);

    if ((prevRowIndex === 0 && prevColIndex === 0) || !(prevRowIndex === -1 && prevColIndex === 1)) islandWalking(rowIndex + 1, colIndex - 1, [1, -1]);

    if ((prevRowIndex === 0 && prevColIndex === 0) || !(prevRowIndex === -1 && prevColIndex === -1)) islandWalking(rowIndex + 1, colIndex + 1, [1, 1]);
  }

  for (let rowIndex = 0; rowIndex < gridHeight; rowIndex++) {
    for (let colIndex = 0; colIndex < gridWidth; colIndex++) {
      const isIslandCell = grid[rowIndex][colIndex];

      if (isIslandCell) {
        islandCount++;
        islandWalking(rowIndex, colIndex);
      }
    }
  }
  //   console.table(grid);
  console.log(islandCount);
  if (islandCells === gridWidth * gridHeight) {
    return 0;
  }

  return islandCount;
}

const tests: Array<{ number: number; grid: TGrid; answer: number }> = [
  {
    number: 1,
    grid: [
      [1, 1, 0, 1, 0],
      [0, 0, 0, 0, 1],
      [0, 1, 1, 0, 0],
    ],
    answer: 3,
  },
  {
    number: 2,
    grid: [
      [0, 0, 0],
      [0, 1, 0],
      [0, 0, 0],
    ],
    answer: 1,
  },
  {
    number: 3,
    grid: [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
    ],
    answer: 0,
  },
  {
    number: 4,
    grid: [
      [1, 1, 1],
      [1, 1, 1],
      [1, 1, 1],
    ],
    answer: 0,
  },
  {
    number: 5,
    grid: [
      [1, 0, 0],
      [0, 1, 0],
      [0, 0, 1],
    ],
    answer: 1,
  },
  {
    number: 6,
    grid: [
      [1, 0, 1],
      [0, 1, 0],
      [1, 0, 1],
    ],
    answer: 1,
  },
  {
    number: 7,
    grid: [[1, 0, 1, 0, 1]],
    answer: 3,
  },
  {
    number: 8,
    grid: [[1], [0], [1], [1], [0]],
    answer: 2,
  },
  {
    number: 9,
    grid: [
      [1, 0, 0, 1, 1],
      [0, 1, 1, 0, 0],
      [1, 1, 0, 0, 1],
      [0, 0, 1, 1, 0],
      [1, 0, 0, 1, 1],
    ],
    answer: 2,
  },
  {
    number: 10,
    grid: [
      [1, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 1, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 1],
    ],
    answer: 3,
  },
  {
    number: 11,
    grid: [[0]],
    answer: 0,
  },
  {
    number: 12,
    grid: [[1]],
    answer: 0,
  },
];

for (let i = 0; i < tests.length; i++) {
  const { grid, answer } = tests[i];
  const result1 = countIslands(grid);

  const result2 = countIslands2(grid);

  const result3 = countIslands3(grid);

  const result4 = countIslands4(grid);

  console.log(`${i + 1}.`, 'v1', result1 === answer, 'v2', result2 === answer, 'v3', result3 === answer, 'v4', result4 === answer);
}

const generateRandomGrid = (height: number, width: number): TGrid => {
  const grid: TGrid = [];
  for (let i = 0; i < height; i++) {
    grid[i] = [];
    for (let j = 0; j < width; j++) {
      grid[i][j] = Math.round(Math.random()) as 0 | 1;
    }
  }
  return grid;
};

const randomGrid = generateRandomGrid(20, 20);

const start1 = performance.now();
const result1 = countIslands(randomGrid);
const duration1 = performance.now() - start1;

const start2 = performance.now();
const result2 = countIslands2(randomGrid);
const duration2 = performance.now() - start2;

const start3 = performance.now();
const result3 = countIslands3(randomGrid);
const duration3 = performance.now() - start3;

const start4 = performance.now();
const result4 = countIslands4(randomGrid);
const duration4 = performance.now() - start4;

console.log(
  'v1.',
  'result',
  result1,
  'duration',
  duration1,
  '\nv2.',
  'result',
  result2,
  'duration',
  duration2,
  '\nv3.',
  'result',
  result3,
  'duration',
  duration3,
  '\nv4.',
  'result',
  result4,
  'duration',
  duration4
);
