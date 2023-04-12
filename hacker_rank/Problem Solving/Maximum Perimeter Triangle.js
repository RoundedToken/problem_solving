// https://www.hackerrank.com/challenges/maximum-perimeter-triangle/problem?isFullScreen=true&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen
function maximumPerimeterTriangle(sticks) {
    sticks.sort((a, b) => { return a - b })
    let l = sticks.length;
    let longMax = 0;
    let longMin = 0;
    let maxP = 0;
    let answer = [];
    for (let i = 0; i < l - 2; i++) {
        for (let g = i + 1; g < l - 1; g++) {
            for (let k = g + 1; k < l; k++) {
                let a = sticks[i];
                let b = sticks[g];
                let c = sticks[k];
                if (a + b > c) {
                   let curMax = Math.max(a, b, c);
                   let curMin = Math.min(a, b, c);
                   let curP = a + b + c;
                   if (curP >= maxP){
                       if (curMax >= longMax) {
                           if (curMin >= longMin) {
                               longMin = curMin;
                               longMax = curMax;
                               maxP = curP;
                               answer = [a, b, c];
                           }
                       }
                   }
                }
                
            }
        }
    }
    if (maxP == 0) return [-1]
    else return answer
}
function main() {
    
    console.log(maximumPerimeterTriangle(sticks));
}
if (require.main === module) {
    main();
}