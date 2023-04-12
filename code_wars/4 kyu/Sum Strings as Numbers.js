// https://www.codewars.com/kata/5324945e2ece5e1f32000370/train/javascript
function sumStrings(a,b) { 
    return (BigInt(a) + BigInt(b)).toString();
}
function main() {
    
    console.log(sumStrings(a,b));
}
if (require.main === module) {
    main();
}