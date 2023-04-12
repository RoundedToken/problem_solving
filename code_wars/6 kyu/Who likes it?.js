// https://www.codewars.com/kata/5266876b8f4bf2da9b000362/train/javascript
function likes(names) {
    let l = names.length;
    if (l == 0) return "no one likes this";
    else if (l == 1) return names[0] + " likes this";
    else if (l == 2) return names[0] + " and " + names[1] + " like this";
    else if (l == 3) return names[0] + ", " + names[1] + " and " + names[2] + " like this";
    else return names[0] + ", " + names[1] + " and " + (l - 2).toString() + " others like this";
}
function main() {
    let names = ["Alex", "Jacob", "Mark", "Max"]
    console.log(likes(names));
}
if (require.main === module) {
    main();
}
// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"