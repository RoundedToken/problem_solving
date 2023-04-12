// https://www.hackerrank.com/challenges/beautiful-pairs/problem?isFullScreen=true
function beautifulPairs(A, B) {  let ans = 0
    
    for (let i = 0; i < A.length; i++){
        if (B.includes(A[i])){
            ans++
            let ind = B.indexOf(A[i])
            B.splice(ind, 1)
        }
    }
    
    
    if (ans === A.length){
        return ans -1
    } else {
        return ans +1
    }
}
function main() {
    let A = [ 3, 5, 7, 11, 5, 8 ];
    let B = [ 5, 7, 11, 10, 5, 8 ];
    console.log(beautifulPairs(A, B));
}
if (require.main === module) {
    main();
}