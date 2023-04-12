// https://app.codility.com/programmers/lessons/15-caterpillar_method/count_distinct_slices/
function solution(A) {
    let count = 0;
    let s = [];
    let i = 0;
    let l = s.length;
    for (; ;) {
        let g = i;
        let elem = A[g];
        while (elem != undefined && count < 1000000000) {
            if (s.includes(elem)) {
                i = g;
                s = s.slice(s.indexOf(elem) + 1, l);
                break;
            }
            else {
                s.push(elem);
                l = s.length;
                g++;
                elem = A[g];
                count += l;
                console.log(s, count)
            }
        }
        
        if (A[g] == undefined) break
    }
    if (count > 1000000000) return 1000000000
    return count
}
function main() {
    let A = [ 1, 3, 4, 1, 2, 1, 3, 2, 1];
    console.log(solution(A));
}
if (require.main === module) {
    main();
}