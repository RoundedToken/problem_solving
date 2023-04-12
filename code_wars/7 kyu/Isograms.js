// https://www.codewars.com/kata/54ba84be607a92aa900000f1/train/javascript
function isIsogram(str) {
    for (let i = 0; i < str.length - 1; i++) {
        for (let g = i + 1; g < str.length; g++) {
            if (str.charAt(i).toLowerCase() == str.charAt(g).toLowerCase()) return false
        }
    }
    return true
}
function main() {
    let str = "Dermatoglyphics";
    console.log(isIsogram(str));
}
if (require.main === module) {
    main();
}