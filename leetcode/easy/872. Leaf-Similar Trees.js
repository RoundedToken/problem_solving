// https://leetcode.com/problems/leaf-similar-trees/solutions/?envType=daily-question&envId=2024-01-09

var leafSimilar = function (root1, root2) {
    const getLeafSequence = function (node, leafSequenceArr) {
        if (node) {
            if (node.left === null && node.right === null) {
                leafSequenceArr.push(node.val);
            }
            if (node.left !== null) {
                getLeafSequence(node.left, leafSequenceArr);
            }
            if (node.right !== null) {
                getLeafSequence(node.right, leafSequenceArr);
            }
        }
    };

    let leafSequenceArr1 = [];
    let leafSequenceArr2 = [];

    getLeafSequence(root1, leafSequenceArr1);
    getLeafSequence(root2, leafSequenceArr2);

    return JSON.stringify(leafSequenceArr1) === JSON.stringify(leafSequenceArr2);
};
