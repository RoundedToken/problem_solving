// https://leetcode.com/problems/find-the-longest-substring-containing-vowels-in-even-counts/description/

var findTheLongestSubstring = function (s) {
  for (let k = s.length - 1; k >= 0; k--) {
    let i = 0,
      j = k;
    while (j < s.length) {
      if (evenVowels(s.substring(i, j + 1))) return j - i + 1;
      i++, j++;
    }
  }
  return 0;
  // Time Complexity: O(n^2)
  // Space Complexity: O(n)
};

var evenVowels = function (str) {
  let m = new Map();
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  for (let letter of str) {
    if (vowels.includes(letter)) m.set(letter, m.get(letter) + 1 || 1);
  }
  let occurrences = Array.from(m.values()).filter((num) => num % 2 === 1);
  return occurrences.length === 0;
};
