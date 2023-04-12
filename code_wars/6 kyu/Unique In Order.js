var uniqueInOrder = function (iterable) {
    let answer = [];
    for (let i of iterable) if (answer[answer.length - 1] != i) answer.push(i);
    return answer
}
function main() {
    iterable = ['A', 'B', 'C', 'c', 'A', 'D'];
    console.log(uniqueInOrder(iterable));
}
if (require.main === module) {
    main();
}
// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]