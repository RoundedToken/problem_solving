// https://www.codewars.com/kata/583203e6eb35d7980400002a/train/javascript
function countSmileys(arr) {
console.log(arr[0] == (/(:|;)+(D)/))
}
function main() {
    let arr = [':D', ';(', ';}', ':-D'];
    console.log(countSmileys(arr));
}
if (require.main === module) {
    main();
}
// countSmileys([':)', ';(', ';}', ':-D']);       // should return 2;
// countSmileys([';D', ':-(', ':-)', ';~)']);     // should return 3;
// countSmileys([';]', ':[', ';*', ':$', ';-D']); // should return 1;