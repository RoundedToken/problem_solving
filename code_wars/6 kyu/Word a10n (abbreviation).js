// https://www.codewars.com/kata/5375f921003bf62192000746/train/javascript

function abbreviate(string) {
    let newStr = '';
    let word = '';

    for (let char of string) {
        if (char.toLowerCase() !== char.toUpperCase()) word += char;
        else {
            if (word.length >= 4) {
                newStr += word[0] + (word.length - 2) + word.charAt(word.length - 1) + char;
            } else newStr += word + char;

            word = '';
        }
    }

    return word !== ''
        ? word.length >= 4
            ? (newStr += word[0] + (word.length - 2) + word.charAt(word.length - 1))
            : (newStr += word)
        : newStr;
}
function main() {
    console.log(abbreviate('monolithic monolithic on'));
}
if (require.main === module) {
    main();
}
