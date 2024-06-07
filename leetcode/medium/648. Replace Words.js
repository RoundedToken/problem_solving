// https://leetcode.com/problems/replace-words/description/?envType=daily-question&envId=2024-06-07

var replaceWords = function (dictionary, sentence) {
    dictionary.sort();
    const words = sentence.split(' ');
    return words
        .map((word) => {
            for (let root of dictionary) {
                if (word.startsWith(root)) {
                    return root;
                }
            }
            return word;
        })
        .join(' ');
};
