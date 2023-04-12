// https://www.codewars.com/kata/51ba717bb08c1cd60f00002f/train/javascript
function solution(list){
    list  = list.concat(100000000)
    //console.log(list)
    let answer = "";
    let start = list[0];
    let end = list[0];
    let count = 0;
    for (let i = 1; i < list.length; i++) {
        if (Math.abs(end - list[i]) > 1) {
            if (count == 0) {
                answer += start.toString() + ",";
            }
            else if (count == 1) {
                answer += start.toString() + "," + end.toString() + ",";
            }
            else {
                answer += start.toString() + "-" + end.toString() + ",";
            }
            count = 0;
            start = list[i];
            end = list[i];
        } else {
            end = list[i];
            count++;
        }
    } 
    return answer.slice(0, answer.length - 1);
   }
function main() {
    let list = [-10, -9, -8, -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20];
    console.log(solution(list));
}
if (require.main === module) {
    main();
}