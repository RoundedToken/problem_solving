//https://www.codewars.com/kata/52bef5e3588c56132c0003bc/train/javascript
class Node {
    constructor(value, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}
function treeByLevels(rootNode) {
    console.log(rootNode);
    const sortedValues = [];

    const tasks = [rootNode];

    while (tasks.length > 0) {
        const task = tasks.shift();
        if (task === null) continue;
        const value = task.value;
        const leftNode = task.left;
        const rightNode = task.right;

        if (task.value !== null) sortedValues.push(value);
        if (leftNode !== null) tasks.push(leftNode);
        if (rightNode !== null) tasks.push(rightNode);
    }

    return sortedValues;
}

function main() {
    console.log(
        treeByLevels(
            new Node(
                2,
                new Node(8, new Node(1), new Node(3)),
                new Node(9, new Node(4), new Node(5))
            )
        )
    );
    console.log(
        treeByLevels(
            new Node(
                1,
                new Node(8, null, new Node(3)),
                new Node(4, null, new Node(5, null, new Node(7)))
            )
        )
    );
}
if (require.main === module) {
    main();
}
