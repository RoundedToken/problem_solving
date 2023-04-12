// https://www.codewars.com/kata/550554fd08b86f84fe000a58/train/javascript
function inArray(array1,array2){
    let solution = new Set();;
    for (let i of array2) {
        for (let g of array1) {
            if (i.toLowerCase().includes(g)) {
                solution.add(g);
            }
        }
    }
    return Array.from(solution).sort()
  }
function main() {
    let array1 = ["arp", "live", "strong"]
    let array2 = ["lively", "alive", "harp", "sharp", "armstrong"]
    console.log(inArray(array1,array2));
}
if (require.main === module) {
    main();
}