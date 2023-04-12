// https://www.codewars.com/kata/546f922b54af40e1e90001da/train/javascript
function alphabetPosition(text) {
    let alph = "abcdefghijklmnopqrstuvwxyz";
    let answer = "";
    text = text.toLowerCase();
    for (let i of text) {
        let x = alph.indexOf(i) + 1;
        if (x > 0) answer += x + " "
    }
    return answer.trim();
  }
function main() {
    let text = "The sunset sets at twelve o' clock.";
    console.log(alphabetPosition(text));
}
if (require.main === module) {
    main();
}