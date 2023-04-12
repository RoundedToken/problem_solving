// https://app.codility.com/programmers/lessons/17-dynamic_programming/number_solitaire/
function solution(A) {
    let l = A.length;
    let sum = A[0] + A[l - 1];
    for (let i = 0; ;) {
        let pos;
        let max = [-10001];
        for (let g = i + 1; g <= i + 6; g++) {
            if (g == l - 1) {
                i = l - 1;
                break
            }
            let elem = A[g];
          
            if (elem > max[0]) max = [elem, g];
            if (elem >= 0) {
                pos = 1;
                sum += elem;
                i = g;
            }
           
            console.log("i", i, "g", g, "sum", sum)
        }
        if (i == l - 1) break
        if (pos == undefined) {
            sum += max[0];
            i = max[1];
        }
    } 
    return sum
}
function main() {
    let A = [-10000, 10000];
    console.log(solution(A));
}
if (require.main === module) {
    main();
}