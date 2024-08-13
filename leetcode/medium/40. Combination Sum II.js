// https://leetcode.com/problems/combination-sum-ii/description/

var combinationSum2 = function (c, target) {
  c.sort((a, b) => a - b);
  let res = [];

  let iterate = (index, sum, temp) => {
    if (sum > target) return;
    if (sum == target) {
      res.push(temp);
      return;
    }
    for (let i = index; i < c.length; i++) {
      if (i != index && c[i] == c[i - 1]) continue;
      iterate(i + 1, sum + c[i], [...temp, c[i]]);
    }
  };
  iterate(0, 0, []);
  return res;
};
