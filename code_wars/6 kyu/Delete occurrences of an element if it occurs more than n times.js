// https://www.codewars.com/kata/554ca54ffa7d91b236000023/train/javascript
function deleteNth(arr,n){
    let count = new Map();
    let answer = [];
    for (let i = 0; i < arr.length; i++) {
        if (count.has(arr[i])) count.set(arr[i], count.get(arr[i]) + 1);
        else count.set(arr[i], 1);
        if (count.get(arr[i]) <= n) answer.push(arr[i])
    }
    return answer
  }
function main() {
    let arr = [20,37,20,21];
    let n = 1;
    console.log(deleteNth(arr,n));
}
if (require.main === module) {
    main();
}
// assert.sameOrderedMembers(deleteNth([20,37,20,21], 1), [20,37,21])
// assert.sameOrderedMembers(deleteNth([1,1,3,3,7,2,2,2,2], 3), [1, 1, 3, 3, 7, 2, 2, 2])