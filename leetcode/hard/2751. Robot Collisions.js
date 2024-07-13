// https://leetcode.com/problems/robot-collisions/description/

var survivedRobotsHealths = function (positions, healths, directions) {
    let robots = new Array(positions.length).fill().map((_, i) => i);
    robots.sort((a, b) => positions[a] - positions[b]);

    let stack = [];
    for (let i of robots) {
        if (directions[i] === 'L') {
            while (stack.length && healths[stack[stack.length - 1]] < healths[i]) {
                healths[stack.pop()] = 0;
                healths[i]--;
            }
            if (stack.length) {
                healths[stack[stack.length - 1]] === healths[i] ? (healths[stack.pop()] = 0) : healths[stack[stack.length - 1]]--;
                healths[i] = 0;
            }
        } else {
            stack.push(i);
        }
    }

    return healths.filter((h) => h !== 0);
};
