// https://leetcode.com/problems/k-th-smallest-in-lexicographical-order/description/

var findKthNumber = function (n, k) {
  function dfs(l, r) {
    let nn = BigInt(n);

    if (l > nn) {
      return 0n;
    }

    if (r > nn) {
      r = nn;
    }

    return r - l + 1n + dfs(l * 10n, r * 10n + 9n);
  }

  let kn = BigInt(--k),
    cu = 1;

  while (kn > 0) {
    let cs = dfs(BigInt(cu), BigInt(cu));

    if (cs <= kn) {
      kn -= cs;
      cu++;
    } else {
      kn -= 1n;
      cu *= 10;
    }
  }

  return cu;
};
