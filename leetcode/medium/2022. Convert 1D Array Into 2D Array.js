// https://leetcode.com/problems/convert-1d-array-into-2d-array/submissions/1375136551/

var construct2DArray = function (original, m, n) {
  if (original.length != m * n) {
    return [];
  }
  let result = [];
  for (let i = 0; i < original.length; i += n) {
    result.push(original.slice(i, i + n));
  }
  return result;
};
