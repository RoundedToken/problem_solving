// https://www.codewars.com/kata/54b724efac3d5402db00065e/train/javascript
decodeMorse = function(morseCode){
    return morseCode.split("   ").map((val) => val.split(" ").map((val) => {return val = MORSE_CODE[val]}).join("")).join(" ").trim()
  }
function main() {
    let morseCode = '.... . -.--   .--- ..- -.. .'
    console.log(decodeMorse(morseCode));
}
if (require.main === module) {
    main();
}