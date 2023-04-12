// https://www.hackerrank.com/challenges/magic-square-forming/problem?isFullScreen=true
function formingMagicSquare(s) {
    let B = [[6, 1, 8, 7, 5, 3, 2, 9, 4],
             [2, 7, 6, 9, 5, 1, 4, 3, 8],
             [4, 9, 2, 3, 5, 7, 8, 1, 6],
             [8, 3, 4, 1, 5, 9, 6, 7, 2],
             [4, 3, 8, 9, 5, 1, 2, 7, 6], 
             [2, 9, 4, 7, 5, 3, 6, 1, 8],
             [6, 7, 2, 1, 5, 9, 8, 3, 4],
             [8, 1, 6, 3, 5, 7, 4, 9, 2]]
     s = s.flat();
     let Z = 0;
     let min = Number.MAX_VALUE;
     for (let i = 0; i < B.length; i++) {
         for (let g = 0; g < s.length; g++) {
             Z += Math.abs(s[g] - B[i][g])
         }
         if (Z < min) {
             min = Z;
         }
         Z = 0;
     }
     return min;
 }
function main() {
}
if (require.main === module) {
    main();
}