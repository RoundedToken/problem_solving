// https://www.codewars.com/kata/5765870e190b1472ec0022a2/train/javascript

function painter(maze, { x, y }) {
    const right = x + 1;
    const up = y - 1;
    const left = x - 1;
    const down = y + 1;

    maze[y][x] = '+';

    if (maze[y][right] === '.') painter(maze, { y: y, x: right });
    if (maze[y][left] === '.') painter(maze, { y: y, x: left });
    if (maze[up][x] === '.') painter(maze, { y: up, x: x });
    if (maze[down][x] === '.') painter(maze, { y: down, x: x });
    console.table(maze);
}

function pathFinder(maze) {
    maze = maze.split('\n').map((v) => v.trim().split(''));
    maze.unshift('W'.repeat(maze.length).split(''));
    maze.push('W'.repeat(maze.length - 1).split(''));
    maze.forEach((v) => {
        v.unshift('W');
        v.push('W');
    });

    painter(maze, { x: 1, y: 1 });

    return maze[maze.length - 2][maze.length - 2] === '+' ? true : false;
}

function main() {
    let maze = `.W..W.W..W
    ...W....W.
    W.W.......
    W...WW..W.
    W..W.W...W
    ..WW..WW..
    ..W.....W.
    W........W
    ....W.....
    W...W...W.`;
    // maze = `.W....
    // ..W...
    // W..W..
    // ..WW..
    // .W..W.
    // .W..W.`;
    console.log(pathFinder(maze));
}
if (require.main === module) {
    main();
}
