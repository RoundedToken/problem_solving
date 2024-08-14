// https://leetcode.com/problems/find-k-th-smallest-pair-distance/description/

const cntPairsOfDistanceUnderN = (nums, n) => {
  let lt = 0;
  let rt = 1;
  let cnt = 0;
  while (lt <= rt) {
    if (lt === rt) {
      rt++;
    }
    if (rt === nums.length) {
      cnt = cnt + ((rt - lt - 1) * (rt - lt)) / 2;
      break;
    }
    if (Math.abs(nums[rt] - nums[lt]) < n) {
      rt++;
    } else {
      cnt = cnt + (rt - lt - 1);
      lt++;
    }
  }
  return cnt;
};

const smallestDistancePair = (nums, k) => {
  nums.sort((a, b) => a - b);
  let lt = 0;
  let rt = 1000000;
  while (lt <= rt) {
    let mid = Math.floor((lt + rt) / 2);
    const a = cntPairsOfDistanceUnderN(nums, mid);
    const b = cntPairsOfDistanceUnderN(nums, mid + 1);
    if (a < k && b >= k) {
      return mid;
    } else if (b < k) {
      lt = mid + 1;
    } else {
      rt = mid - 1;
    }
  }
};
