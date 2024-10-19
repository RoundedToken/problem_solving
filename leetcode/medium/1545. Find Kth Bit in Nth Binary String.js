// https://leetcode.com/problems/find-kth-bit-in-nth-binary-string/description/

var findKthBit = function (n, k) {
  if (n == 1) return '0';
  const size = (1 << n) - 1;

  if (k === (size + 1) / 2) return '1';
  if (k > (size + 1) / 2) {
    return findKthBit(n - 1, size - k + 1) === '0' ? '1' : '0';
  } else {
    return findKthBit(n - 1, k);
  }
};
