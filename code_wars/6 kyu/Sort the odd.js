// https://www.codewars.com/kata/578aa45ee9fd15ff4600090d/train/javascript
function sortArray(array) {
    let sort = [];
    for (let i of array) {
        if (i % 2) sort.push(i);
    }
    sort.sort((a, b) => { return b - a });
    for (let i in array) {
        if (array[i] % 2) {
            array[i] = sort[sort.length - 1];
            sort.pop();
        }
    }
    return array
}
function main() {
    let array = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
    console.log(sortArray(array));
}
if (require.main === module) {
    main();
}