function solution(A) {
    let l = A.length;
    for (let i = 1; i < l - 1;) {
        if (A[i] > A[i - 1] && A[i] > A[i + 1]) {
            A[i] = 'P';
            i += 2
        } else i++;
    }
    let answer = 0;
    for (let blocks = 1; blocks <= l; blocks++) {
        if (l % blocks == 0) {
            let flag = true;
            let count = l / blocks;
            for (let i = 0; i <= l - count;) {
                //console.log(A.slice(i, i + count))
                if (A.slice(i, i + count).includes('P') == false) {
                    flag = false;
                    break;
                } else i += count;
            }
            if (flag) answer = blocks;
        }
    }

    //console.table(A)
    return answer
}
function main() {
    let A = [
        1, 6, 1, 1, 1, 1, 1, 6,
        1, 1, 1, 1, 1, 1, 1, 1,
        6, 1, 1, 1, 1, 1, 6, 1
      ];
    console.log(solution(A));
}
if (require.main === module) {
    main();
}