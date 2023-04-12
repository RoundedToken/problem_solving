function painter(maze, { x, y }, turns = 0) {
    const right = x + 1;
    const up = y - 1;
    const left = x - 1;
    const down = y + 1;

    if (maze[y][x] === '.' || maze[y][x] > turns) maze[y][x] = turns;
    turns++;

    if (maze[y][right] === '.' || maze[y][right] > turns) painter(maze, { y: y, x: right }, turns);
    if (maze[y][left] === '.' || maze[y][left] > turns) painter(maze, { y: y, x: left }, turns);
    if (maze[up][x] === '.' || maze[up][x] > turns) painter(maze, { y: up, x: x }, turns);
    if (maze[down][x] === '.' || maze[down][x] > turns) painter(maze, { y: down, x: x }, turns);
}

function pathFinder(maze) {
    maze = maze.split('\n').map((v) => v.trim().split(''));
    maze.unshift('W'.repeat(maze.length).split(''));
    maze.push('W'.repeat(maze.length - 1).split(''));
    maze.forEach((v) => {
        v.unshift('W');
        v.push('W');
    });

    console.table(maze);
    painter(maze, { x: 1, y: 1 });
    console.table(maze);

    return maze[maze.length - 2][maze.length - 2] === '.'
        ? false
        : maze[maze.length - 2][maze.length - 2];
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
