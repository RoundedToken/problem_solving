// https://leetcode.com/problems/filling-bookcase-shelves/description/

var minHeightShelves = function (books, shelfWidth) {
  const dp = new Array(books.length + 1).fill(Infinity);
  dp[0] = 0;

  for (let i = 0; i < books.length; i++) {
    let [width, height] = books[i];
    // Create new shelf
    dp[i + 1] = dp[i] + height;

    for (let j = i; j > 0; j--) {
      if (width + books[j - 1][0] > shelfWidth) break;

      height = Math.max(height, books[j - 1][1]);
      width += books[j - 1][0];
      dp[i + 1] = Math.min(dp[i + 1], height + dp[j - 1]);
    }
  }
  return dp[books.length];
};
