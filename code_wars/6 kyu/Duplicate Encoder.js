// https://www.codewars.com/kata/54b42f9314d9229fd6000d9c/train/javascript
function duplicateEncode(word) {
    word = word.toLowerCase();
    let answer = "";
    for (let i of word) (Array.from(word.matchAll("[" + i + "]")).length > 1) ? answer += ")" : answer += "(";
    return answer
}
function main() {
    let word = "(( @";
    console.log(duplicateEncode(word));
}
if (require.main === module) {
    main();
}
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))(("