// https://leetcode.com/problems/minimum-number-of-pushes-to-type-word-ii/description/

function minimumPushes(word) {
  const letterFreq = {};
  for (const char of word) {
    letterFreq[char] = (letterFreq[char] || 0) + 1;
  }

  const sortedLetters = Object.entries(letterFreq)
    .sort((a, b) => b[1] - a[1])
    .map(([char]) => char);

  const keyPushes = { 2: 1, 3: 1, 4: 1, 5: 1, 6: 1, 7: 1, 8: 1, 9: 1 };
  let totalPushes = 0;

  for (const char of sortedLetters) {
    const key = Object.keys(keyPushes).reduce((minKey, key) => (keyPushes[key] <= keyPushes[minKey] ? key : minKey));
    totalPushes += keyPushes[key] * letterFreq[char];
    keyPushes[key]++;
  }

  return totalPushes;
}
