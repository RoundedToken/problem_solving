// https://leetcode.com/problems/maximum-swap/description/

var maximumSwap = function (num) {
  let arr = (num + '').split('');
  for (let i = 0, len = arr.length; i < len; i++) {
    let maxInx = i;
    for (let j = i + 1; j < len; j++) {
      if (arr[j] >= arr[maxInx]) {
        maxInx = j;
      }
    }
    if (maxInx != i && arr[maxInx] != arr[i]) {
      swap(arr, maxInx, i);
      return +arr.join('');
    }
  }
  return num;
};

function swap(arr, a, b) {
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}
