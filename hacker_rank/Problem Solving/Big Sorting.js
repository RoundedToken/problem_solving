// https://www.hackerrank.com/challenges/big-sorting/problem?isFullScreen=true
function bigSorting(unsorted) {
    let l = unsorted.length;
    let sorted = [];
    for (let i = 0; i < l; i++) {
        sorted[i] = BigInt(unsorted[i]);
    }
    sorted.sort((a ,b) => {
        if(a > b) {
          return 1;
        } else if (a < b){
          return -1;
        } else {
          return 0;
        }
      });
    for (let i = 0; i < l; i++) {
        unsorted[i] = sorted[i].toString()
    }
    return unsorted
}
function main() {
    let unsorted = [
        '1',
        '2',
        '100',
        '12303479849857341718340192371',
        '3084193741082937',
        '3084193741082938',
        '111',
        '200'
    ]
    console.log(bigSorting(unsorted));
}
if (require.main === module) {
    main();
}