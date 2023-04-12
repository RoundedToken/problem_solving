// https://app.codility.com/programmers/lessons/8-leader/equi_leader/
function solution(A) {
    let l = A.length;
    let count = 0;
    let leader = Array()
    for (let i = 0; i < l; i++) {
        let lS = leader.length;
        if (lS == 0) leader.push(A[i]);
        else {
            if (leader[lS - 1] == A[i]) leader.push(A[i]);
            else {
                leader.pop();
            }
        }
    }
    let lead = leader[0];
    let lCount = 0;
    for (let i = 0; i < l; i++) {
        if (A[i] == lead) lCount++;
    }
    
    let nlCount = l - lCount
    let leftCountLeader = 0;
    let leftCountNo = 0;
    let LEADER = leader[0];
    for (let i = 0; i < l - 1; i++) {
        if (A[i] == LEADER) {
            leftCountLeader++;
            lCount--;
        } else {
            leftCountNo++;
            nlCount--;
        }
        if (leftCountLeader - leftCountNo > 0 && lCount - nlCount > 0) count++;
    }


    return count
}
function main() {
    let A = [2, 3, 4, 4, 4, 2];
    //let A = [3, 4, 3, 2, 3, -1, 3, 3];
    //let A = [4, 6, 6, 6, 6, 8, 8];
    console.log(solution(A));
}
if (require.main === module) {
    main();
}