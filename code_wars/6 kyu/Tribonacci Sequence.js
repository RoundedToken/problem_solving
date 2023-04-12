// https://www.codewars.com/kata/556deca17c58da83c00002db/train/javascript
function tribonacci(signature,n){
    for (let i = 3; i <= n; i++) {
        signature[i] = signature[i - 1] + signature[i - 2] + signature[i - 3];
    }
    return signature.slice(0, n)
  }
function main() {
    let signature = [0,1,1];
    let n = 10;
    console.log(tribonacci(signature,n));
}
if (require.main === module) {
    main();
}
// doTest([ [1,1,1], 10], [1,1,1,3,5,9,17,31,57,105]   )
// doTest([ [0,0,1], 10], [0,0,1,1,2,4,7,13,24,44]     )
// doTest([ [0,1,1], 10], [0,1,1,2,4,7,13,24,44,81]    )
// doTest([ [1,0,0], 10], [1,0,0,1,1,2,4,7,13,24]      )
// doTest([ [0,0,0], 10], [0,0,0,0,0,0,0,0,0,0]        )
// doTest([ [1,2,3], 10], [1,2,3,6,11,20,37,68,125,230])
// doTest([ [3,2,1], 10], [3,2,1,6,9,16,31,56,103,190] )
// doTest([ [1,1,1],  1], [1])