// https://www.codewars.com/kata/5839edaa6754d6fec10000a2/train/javascript
function findMissingLetter(array) {
    let alphL = "abcdefghijklmnopqrstuvwxyz";
    if (alphL.includes(array[0]) == 0) alphL = alphL.toUpperCase();
    for (let i = 1; i < array.length; i++) {
        //console.log(array[i])
        if ((alphL.charAt(alphL.indexOf(array[i]) - 1)) != array[i - 1]) return alphL.charAt(alphL.indexOf(array[i]) - 1);
    }

}
function main() {
    let array = ['O','Q','R','S'];
    console.log(findMissingLetter(array));
}
if (require.main === module) {
    main();
}
// ['a','b','c','d','f'] -> 'e'
// ['O','Q','R','S'] -> 'P'