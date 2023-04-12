// https://www.codewars.com/kata/58f5c63f1e26ecda7e000029/train/javascript
function wave(str){
    let result = [];
    
    str.split("").forEach((char, index) => {
        if (/[a-z]/.test(char)) {
            result.push(str.slice(0, index) + char.toUpperCase() + str.slice(index + 1));
        }
    });
    
    return result;
  }
function main() {
    let str = "hello";
    console.log(wave(str));
}
if (require.main === module) {
    main();
}