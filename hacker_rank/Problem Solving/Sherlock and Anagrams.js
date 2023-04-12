// https://www.hackerrank.com/challenges/sherlock-and-anagrams/problem?isFullScreen=true
function sherlockAndAnagrams(s) {

    let num = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101,]
    let verb = "abcdefghijkmnlopqrstuvwxyz"
    let MAP = new Map();
    for (let i in num) {
        MAP.set(verb.charAt(i), num[i])
    }
    s = s.split("");
    let count = 0;
    let l = s.length;
    for (let i = 0; i < l; i++) {
        s[i] = MAP.get(s[i])
    }

    function anagram2(s1, s2) {
        let l1 = s1.length;
        let val1 = 1n;
        let val2 = 1n;
        for (let i = 0; i < l1; i++) {
            val1 *= BigInt(s1[i]);
            val2 *= BigInt(s2[i]);
        }
        if (val1 == val2) count++
    }

    for (let size = 1; size <= l - 1; size++) {
        for (let g = 0; g < l - size; g++) {
            for (let k = g + 1; k <= l - size; k++)
                anagram2(s.slice(g, g + size), s.slice(k, k + size))
        }
    }

    return count
}
function main() {
    let s = "ifailuhkqqhucpoltgtyovarjsnrbfpvmupwjjjfiwwhrlkpekxxnebfrwibylcvkfealgonjkzwlyfhhkefuvgndgdnbelgruel";
    console.log(sherlockAndAnagrams(s));
}
if (require.main === module) {
    main();
}