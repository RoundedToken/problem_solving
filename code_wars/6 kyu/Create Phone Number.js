// https://www.codewars.com/kata/525f50e3b73515a6db000b83/train/javascript
function createPhoneNumber(numbers) {
    return "(" + numbers.slice(0, 3).join("") + ") " + numbers.slice(3, 6).join("") + "-" + numbers.slice(6).join("");
}
function main() {
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    console.log(createPhoneNumber(numbers));
}
if (require.main === module) {
    main();
}
//([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"