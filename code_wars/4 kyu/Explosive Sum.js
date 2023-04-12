// https://www.codewars.com/kata/52ec24228a515e620b0005ef/train/javascript
function sum(num) {
    const findPartitions = (num = 1) => {
        const arr = Array(num + 1).fill(null).map(() => {
           return Array(num + 1).fill(null);
        });
        for (let j = 1; j <= num; j += 1) {
           arr[0][j] = 0;
        }
        for (let i = 0; i <= num; i += 1) {
           arr[i][0] = 1;
        }
        for (let i = 1; i <= num; i += 1) {
           for (let j = 1; j <= num; j += 1) {
              if (i > j) {
                 arr[i][j] = arr[i - 1][j];
              }
              else {
                 const exclusive = arr[i - 1][j];
                 const inclusive = arr[i][j - i];
                 arr[i][j] = exclusive + inclusive;
              }
           }
        }
        return arr[num][num];
     };
     return findPartitions(num)
  }
function main() {
    let num = 100;
    console.log(sum(num));
}
if (require.main === module) {
    main();
}