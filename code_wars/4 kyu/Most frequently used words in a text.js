// https://www.codewars.com/kata/51e056fe544cf36c410000fb/train/javascript
function topThreeWords(text) {
    text += " ";
    let verbs = "abcdefghijklmnopqrstuvwxyz'";
    let inWord = false;
    let word;
    let words = new Map();
    for (let i of text) {
        let symb = i.toLowerCase();
        if (inWord && verbs.includes(symb)) {
            word += symb
        } else if (verbs.includes(symb) && inWord == false) {
            inWord = true;
            word = symb;
        } else if (verbs.includes(symb) == false && inWord) {
            inWord = false;
            if (words.has(word)) words.set(word, words.get(word) + 1);
            else words.set(word, 1);
        }
    }
    words.delete("'");
    let arr = Array.from(([...words.entries()].sort((a, b) => b[1] - a[1])));
    arr = arr.slice(0, 3);
    let answer = [];
    for (let i in arr) {
        answer.push(arr[i][0]);
    }
    return answer
}
function main() {
    let text = "  '  ";
    console.log(topThreeWords(text));
}
if (require.main === module) {
    main();
}