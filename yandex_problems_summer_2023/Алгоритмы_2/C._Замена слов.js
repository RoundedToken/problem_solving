const replaceWords = (dict, words) => {
    dict.sort((a, b) => a.length - b.length);

    for (let i in words) {
        const word = words[i];
        const wordL = word.length;

        if (wordL === 0) continue;

        for (let v of dict) {
            if (wordL <= v.length) break;
            if (word.startsWith(v)) {
                words[i] = v;
                break;
            }
        }
    }

    return words.join(' ');
};

function main() {
    console.log(replaceWords(['a', 'b'], ['abdafb', 'basrt', 'casds', 'dsasa', 'a']));
    console.log(replaceWords(['aa', 'bc', 'aaa'], ['a', 'aa', 'aaa', 'bcd', 'abcd']));
    console.log(replaceWords(['bc', 'aa', 'aaa', 'c', 'a'], ['a', 'aa', 'aaa', 'bcd', 'abcd']));
}
if (require.main === module) {
    main();
}
