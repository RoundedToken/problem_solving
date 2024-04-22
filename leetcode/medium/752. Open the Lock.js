// https://leetcode.com/problems/open-the-lock/description/?envType=daily-question&envId=2024-04-22

var openLock = function (deadends, target) {
    const visited = new Set(deadends);
    const queue = ['0000'];
    let level = 0;

    while (queue.length > 0) {
        const size = queue.length;

        for (let i = 0; i < size; i++) {
            const current = queue.shift();

            if (current === target) {
                return level;
            }

            if (visited.has(current)) {
                continue;
            }

            visited.add(current);

            for (let j = 0; j < 4; j++) {
                const digit = parseInt(current[j]);

                for (let diff of [-1, 1]) {
                    const nextDigit = (digit + diff + 10) % 10;
                    const next = current.substring(0, j) + nextDigit + current.substring(j + 1);

                    if (!visited.has(next)) {
                        queue.push(next);
                    }
                }
            }
        }

        level++;
    }

    return -1;
};
