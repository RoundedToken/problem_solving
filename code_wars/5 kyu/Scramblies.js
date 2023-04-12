// https://www.codewars.com/kata/55c04b4cc56a697bb0000048/train/javascript
function scramble(str1, str2) {
    let map1 = new Map();
    let map2 = new Map();
    for (let i of str1) {
        if (map1.has(i)) map1.set(i, map1.get(i) + 1);
        else map1.set(i, 1);
    }
    for (let i of str2) {
        if (map2.has(i)) map2.set(i, map2.get(i) + 1);
        else map2.set(i, 1);
    }
    for (let i of map2.keys()) {
        if (map1.has(i)) {
            if (map1.get(i) < map2.get(i)) return false
        } else return false
    }
    return true
  }
function main() {
    let str1 = 'rkqodlw';
    let str2 = 'world';
    console.log(scramble(str1, str2));
}
if (require.main === module) {
    main();
}