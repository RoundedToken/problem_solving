// https://www.codewars.com/kata/515de9ae9dcfc28eb6000001/train/javascript
function solution(str){
    if (str.length == 0) return []
    let answer = [];
    for (let i = 0; i < str.length; i += 2) {
        answer.push(str.slice(i, i + 2));
    }
    answer[answer.length - 1].length == 1 ? answer[answer.length - 1] = answer[answer.length - 1].concat("_") : answer;
    return answer
}
function main() {
    let str = 'abcdef';
    console.log(solution(str));
}
if (require.main === module) {
    main();
}
// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']