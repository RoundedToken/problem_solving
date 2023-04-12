// https://www.codewars.com/kata/5264d2b162488dc400000001/train/javascript
function spinWords(string){
    return string.split(" ").map((val) => {if (val.length > 4) return val.split("").reverse().join(""); else return val}).join(" ")
  }
function main() {
    let string = "Hey fellow warriors";
    console.log(spinWords(string));
}
if (require.main === module) {
    main();
}
// spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" 
// spinWords( "This is a test") => returns "This is a test" 
// spinWords( "This is another test" )=> returns "This is rehtona test"