// https://www.codewars.com/kata/550498447451fbbd7600041c/train/javascript
function comp(array1, array2) {
    if (array1 === null || array2 === null) return false
    if (array1.length == 0 && array2.length == 0) return true
    if (array1.length == 0 || array2.length == 0) return false
    let map1 = new Map();
    let map2 = new Map();
    for (let i of array1) {
        if (map1.has(i)) map1.set(i, map1.get(i) + 1);
        else map1.set(i, 1);
    }
    for (let i of array2) {
        let x = Math.sqrt(i);
        if (map2.has(x)) map2.set(x, map2.get(x) + 1);
        else map2.set(x, 1);
    }
    for (let [key, value] of map2) {
        if (map1.get(key) != value) return false
    }
    return true
}
function main() {
    let array1 = [];
    let array2 = [];
    console.log(comp(array1, array2));
}
if (require.main === module) {
    main();
}