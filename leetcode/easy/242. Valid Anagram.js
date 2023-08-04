// https://leetcode.com/problems/valid-anagram/

var isAnagram = function (s, t) {
    const mapS = new Map([]);
    const mapT = new Map([]);
    for (const char of s) mapS.has(char) ? mapS.set(char, mapS.get(char) + 1) : mapS.set(char, 1);
    for (const char of t) mapT.has(char) ? mapT.set(char, mapT.get(char) + 1) : mapT.set(char, 1);
    return (
        Array.from(mapS.entries()).sort().toString() ===
        Array.from(mapT.entries()).sort().toString()
    );
};
function main() {
    console.log(isAnagram('aab', 'baa'));
}
if (require.main === module) {
    main();
}
