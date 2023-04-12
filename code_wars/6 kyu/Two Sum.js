// https://www.codewars.com/kata/52c31f8e6605bcc646000082/train/javascript
function twoSum(numbers, target) {
    for (let i = 0; i < numbers.length - 1; i++) {
        for (let g = i + 1; g < numbers.length; g++) {
            if (numbers[i] + numbers[g] == target) return [i, g]
        }
    }
  }
function main() {
    let numbers = [1, 2, 3];
    let target = 4;
    console.log(twoSum(numbers, target));
}
if (require.main === module) {
    main();
}
// twoSum([1, 2, 3], 4) // returns [0, 2] or [2, 0]