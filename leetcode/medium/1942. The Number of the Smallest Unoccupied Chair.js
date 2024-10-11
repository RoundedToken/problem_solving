// https://leetcode.com/problems/the-number-of-the-smallest-unoccupied-chair/description/

var smallestChair = function (times, targetFriend) {
  let chairs = Array(times.length).fill(-1);
  let timesSorted = [...times].sort((a, b) => a[0] - b[0]);

  for (let i = 0; i < timesSorted.length; i++) {
    for (let j = 0; j < chairs.length; j++) {
      if (chairs[j] <= timesSorted[i][0]) {
        chairs[j] = timesSorted[i][1];
        if (timesSorted[i].toString() === times[targetFriend].toString()) {
          return j;
        }
        break;
      }
    }
  }
};
