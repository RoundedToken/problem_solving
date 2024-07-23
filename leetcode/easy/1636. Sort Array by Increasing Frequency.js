// https://leetcode.com/problems/sort-array-by-increasing-frequency/description/

var frequencySort = function (nums) {
  const output = [];
  const freqs = nums.reduce((acc, val) => ((acc[val] = (acc[val] || 0) + 1), acc), {});
  const sorted = Object.keys(freqs).sort((a, b) => (freqs[a] === freqs[b] ? b - a : freqs[a] - freqs[b]));

  for (const num of sorted) for (let i = 0; i < freqs[num]; i++) output.push(num);

  return output;
};
