// https://www.codewars.com/kata/55c45be3b2079eccff00010f/train/javascript
function order(words){
    let answer = [];
    let array = words.split(" ");
    for (let i = 1; i <= 9; i++) {
        for (let g of array) {
            if (g.includes(i.toString())) answer.push(g)
        }
    }
    return answer.join(" ")
  }
function main() {
    let words = "is2 Thi1s T4est 3a";
    console.log(order(words));
}
if (require.main === module) {
    main();
}