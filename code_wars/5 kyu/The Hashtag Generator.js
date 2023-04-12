// https://www.codewars.com/kata/52449b062fb80683ec000024/train/javascript
function generateHashtag (str) {
    let hash = "#";
    let word = false;
    for (let i of str) {
        if (i != " " && word == false) {
            word = true;
            hash += i.toUpperCase();
        } else if (i != " " && word) {
            hash += i;
        } else word = false
    }
    if (hash.length > 140 || hash.length < 2) return false
    else return hash
}
function main() {
    let str = "    Hello     World   " 
    console.log(generateHashtag (str));
}
if (require.main === module) {
    main();
}