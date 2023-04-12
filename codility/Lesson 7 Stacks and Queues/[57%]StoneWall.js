// https://app.codility.com/programmers/lessons/7-stacks_and_queues/stone_wall/
function solution(H) {
    let count = 0;
    let l = H.length;
    while (l > 1) {
        let right = H[l - 1];
        let left = H[l - 2];
        if (right == left) {
            count++;
            H.pop();
            H.pop();
            l = H.length;
        } else if (right > left) {
            count++;
            H.pop();
            l = H.length;
        } else {
            H.unshift(H[l - 1]);
            H.pop();
        }
        console.log(H)
    }
    return count;
}
function main() {
    let H = [8, 8, 5, 7, 9, 8, 7, 4, 8];
    //H = [1, 2, 3, 3, 2, 1]
    console.log(solution(H));
}
if (require.main === module) {
    main();
}