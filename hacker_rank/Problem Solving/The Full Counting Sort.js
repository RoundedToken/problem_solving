// https://www.hackerrank.com/challenges/countingsort4/problem?isFullScreen=true
function countSort(arr) {
    let l = arr.length;
    let answer = Array(~~(l / 2) + 1);
    for (let i = 0; i < answer.length; i++) {
        answer[i] = Array();
    }
    for (let i = 0; i < l; i++) {
        if (i < ~~(l / 2)) {
            answer[Number(arr[i][0])].push("-");
        } else {
            answer[Number(arr[i][0])].push(arr[i][1]);
        }
    }
    for (let i = 0; i < answer.length; i++) {
        answer[i] = answer[i].join(" ")
    }
    console.log(answer)
    return answer.join(" ").trim()

}
function main() {
    let arr = [
        ['0', 'ab'], ['6', 'cd'],
        ['0', 'ef'], ['6', 'gh'],
        ['4', 'ij'], ['0', 'ab'],
        ['6', 'cd'], ['0', 'ef'],
        ['6', 'gh'], ['0', 'ij'],
        ['4', 'that'], ['3', 'be'],
        ['0', 'to'], ['1', 'be'],
        ['5', 'question'], ['1', 'or'],
        ['2', 'not'], ['4', 'is'],
        ['2', 'to'], ['4', 'the']
    ];
    console.log(countSort(arr));
}
if (require.main === module) {
    main();
}