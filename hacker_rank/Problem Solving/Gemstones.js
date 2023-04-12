// https://www.hackerrank.com/challenges/gem-stones/problem?isFullScreen=true&h_r=next-challenge&h_v=zen
function gemstones(arr) {
    let alph = "abcdefghijklmnopqrstuvwxyz";
    alph = alph.split("");
    let MAP = new Map();
    let count = 0;
    for (let i = 0; i < alph.length; i++) {
        MAP.set(alph[i], 0);
    }
    console.table(MAP)
    for (let i = 0; i < arr.length; i++) {
        for (let g = 0; g < alph.length; g++) {
            if (arr[i].includes(alph[g])) MAP.set(alph[g], MAP.get(alph[g]) + 1);
        }
    }
    MAP.forEach((val) => {
        if (val == arr.length) count++
    })
    console.table(MAP)
    return count

}
function main() {
    let  arr = ['abcdde', 'baccd', 'eeabg'];
    console.log(gemstones(arr));
}
if (require.main === module) {
    main();
}