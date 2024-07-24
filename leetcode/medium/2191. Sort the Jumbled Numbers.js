// https://leetcode.com/problems/sort-the-jumbled-numbers/description/

var sortJumbled = function (mapping, nums) {
  const mappedNums = nums.map((num) => {
    const mappedStr = num
      .toString()
      .split('')
      .map((digit) => mapping[digit])
      .join('');
    return { original: num, mapped: parseInt(mappedStr) };
  });

  mappedNums.sort((a, b) => a.mapped - b.mapped);

  return mappedNums.map((entry) => entry.original);
};
