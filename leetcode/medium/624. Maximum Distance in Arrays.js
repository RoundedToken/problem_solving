// https://leetcode.com/problems/maximum-distance-in-arrays/description/

var maxDistance = function (arrays) {
  cur_min = arrays[0][0];
  cur_max = arrays[0][arrays[0].length - 1];
  res = 0;
  console.log(cur_min, cur_max);
  for (i = 1; i < arrays.length; i++) {
    arr = arrays[i];
    res = Math.max(res, Math.max(cur_max - arr[0], arr[arr.length - 1] - cur_min));
    cur_min = Math.min(cur_min, arr[0]);
    cur_max = Math.max(cur_max, arr[arr.length - 1]);
  }
  return res;
};
