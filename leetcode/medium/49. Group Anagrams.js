// https://leetcode.com/problems/group-anagrams/

var groupAnagrams = function (strs) {
    const result = [];
    //hash --> index
    const hashes = new Map();
    let indexNum = 0;
    for (const word of strs) {
        const countChars = new Map();

        for (const char of word) {
            countChars.has(char)
                ? countChars.set(char, countChars.get(char) + 1)
                : countChars.set(char, 1);
        }

        const hash = Array.from(countChars.entries()).sort().toString();
        if (hashes.has(hash)) {
            const ind = hashes.get(hash);
            result[ind].push(word);
        } else {
            hashes.set(hash, indexNum);
            result[indexNum] = [word];
            indexNum++;
        }
    }

    return result;
};

function main() {
    console.log(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']));
}
if (require.main === module) {
    main();
}

// ]Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
