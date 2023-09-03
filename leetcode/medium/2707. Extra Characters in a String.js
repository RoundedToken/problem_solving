// https://leetcode.com/problems/extra-characters-in-a-string/?envType=daily-question&envId=2023-09-02

var minExtraChar = function (s, dictionary) {
    const maxVal = s.length + 1;
    const dp = Array(s.length + 1).fill(maxVal);
    dp[0] = 0;

    const dictionarySet = new Set(dictionary);

    for (let i = 1; i <= s.length; ++i) {
        dp[i] = dp[i - 1] + 1;
        for (let l = 1; l <= i; ++l) {
            if (dictionarySet.has(s.substring(i - l, i))) {
                dp[i] = Math.min(dp[i], dp[i - l]);
            }
        }
    }
    return dp[s.length];
};

function main() {
    console.log(minExtraChar('sayhelloworld', ['hello', 'world']));
    console.log(minExtraChar('leetscode', ['leet', 'code', 'leetcode']));
}
if (require.main === module) {
    main();
}
