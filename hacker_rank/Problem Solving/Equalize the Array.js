// https://www.hackerrank.com/challenges/equality-in-a-array/problem?isFullScreen=true
function equalizeArray(arr) {
    function returnMostOccurring(b) {
   const obj = {};
   arr.forEach(item => {
      if(!obj[item]) obj[item] = 1;
      else obj[item]++;
   })

   const res =  Object.entries(obj).sort((a,b) => b[1]-a[1]);
   return res.shift();
}
    let count = 0;
    let x = returnMostOccurring(arr);
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == Number(x[0])) {
            count++;
        }
    }
    console.log(x, count)
    return arr.length - count
}
function main() {
}
if (require.main === module) {
    main();
}