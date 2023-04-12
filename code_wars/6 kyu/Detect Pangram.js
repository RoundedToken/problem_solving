// https://www.codewars.com/kata/545cedaa9943f7fe7b000048/train/javascript
function isPangram(string){
    string = string.toLowerCase();
    let alph = "abcdefghijklmnopqrstuvwxyz";
    for (let i of alph) {
        if (!string.includes(i)) return false
    }
    return true
  }
function main() {
    let string = 'Cwm fjord bank glyphs vext quiz'
    console.log(isPangram(string));
}
if (require.main === module) {
    main();
}