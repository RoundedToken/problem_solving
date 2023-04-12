// https://www.codewars.com/kata/5842df8ccbd22792a4000245/train/javascript
function expandedForm(num) {
    num = num.toString();
    let answer = "";
    let l = num.length;
    for (let i = 0; i < l; i++) {
        if (num.charAt(i) != 0) answer += num.charAt(i).padEnd(l - i, "0") + " + ";
    }
    return answer.slice(0, answer.length - 3)
  }
function main() {
    let num = 123;
    console.log(expandedForm(num));
}
if (require.main === module) {
    main();
}