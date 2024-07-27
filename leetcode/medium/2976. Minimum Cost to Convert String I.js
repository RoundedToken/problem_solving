// https://leetcode.com/problems/minimum-cost-to-convert-string-i/description/

var minimumCost = function (source, target, original, changed, cost) {
  const dp = new Array(26).fill().map((_) => new Array(26).fill(Infinity));
  for (let i = 0; i < 26; i++) dp[i][i] = 0;

  for (let i = 0; i < original.length; i++) {
    const originalIdx = original[i].charCodeAt() - 97;
    const changedIdx = changed[i].charCodeAt() - 97;
    dp[originalIdx][changedIdx] = Math.min(dp[originalIdx][changedIdx], cost[i]);
  }

  for (let i = 0; i < 26; i++) {
    for (let j = 0; j < 26; j++) {
      for (let k = 0; k < 26; k++) {
        dp[j][k] = Math.min(dp[j][k], dp[j][i] + dp[i][k]);
      }
    }
  }

  let ans = 0;
  for (let i = 0; i < source.length; i++) {
    const sourceIdx = source[i].charCodeAt() - 97;
    const targetIdx = target[i].charCodeAt() - 97;
    if (dp[sourceIdx][targetIdx] === Infinity) return -1;
    ans += dp[sourceIdx][targetIdx];
  }

  return ans;
};
