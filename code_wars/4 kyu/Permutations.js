// https://www.codewars.com/kata/5254ca2719453dcc0b00027d/train/javascript
function permutations(string) {
if (string.length < 2 ){
        return [string]
      }
    
      let permutationsSet = new Set(); 
    
      for (let i = 0; i < string.length; i++){
        let char = string[i]
        let remainingChars = string.slice(0, i) + string.slice(i + 1, string.length)
        for (let permutation of permutations(remainingChars)){
            permutationsSet.add(char + permutation) }
      }
      return Array.from(permutationsSet)
}
function main() {
    let string = "a"
    console.log(permutations(string));
}
if (require.main === module) {
    main();
}
// * With input 'a'
// * Your function should return: ['a']
// * With input 'ab'
// * Your function should return ['ab', 'ba']
// * With input 'aabb'
// * Your function should return ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']