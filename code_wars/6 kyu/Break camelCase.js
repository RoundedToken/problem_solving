// https://www.codewars.com/kata/5208f99aee097e6552000148/train/javascript
function solution(string) {
    return string = string.replace(/[A-Z]/g, (c) => {return " " + c})
}
function main() {
    let string = "camelCasing";
    console.log(solution(string));
}
if (require.main === module) {
    main();
}
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""