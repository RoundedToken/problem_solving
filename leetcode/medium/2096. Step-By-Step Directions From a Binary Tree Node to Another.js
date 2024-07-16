// https://leetcode.com/problems/step-by-step-directions-from-a-binary-tree-node-to-another/description/

var getDirections = function (root, startValue, destValue) {
    const findPath = (node, value, path) => {
        if (node === null) return false;
        if (node.val === value) return true;

        path.push('L');
        if (findPath(node.left, value, path)) return true;
        path.pop();

        path.push('R');
        if (findPath(node.right, value, path)) return true;
        path.pop();

        return false;
    };

    let pathToStart = [];
    let pathToDest = [];

    findPath(root, startValue, pathToStart);
    findPath(root, destValue, pathToDest);

    // Find the LCA by comparing paths
    let i = 0;
    while (i < pathToStart.length && i < pathToDest.length && pathToStart[i] === pathToDest[i]) {
        i++;
    }

    let stepsUp = 'U'.repeat(pathToStart.length - i);
    let stepsDown = pathToDest.slice(i).join('');

    return stepsUp + stepsDown;
};
