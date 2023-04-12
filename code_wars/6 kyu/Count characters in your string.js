// https://www.codewars.com/kata/52efefcbcdf57161d4000091/train/javascript
function count (string) {  
    let c = new Map();
    for (let i of string) {
        if (c.has(i)) c.set(i, c.get(i) + 1);
        else c.set(i, 1);
    }
    let c1 = Object.fromEntries(c);
    return c1
  }
function main() {
    let string = "aab"
    console.log(count (string));
}
if (require.main === module) {
    main();
}