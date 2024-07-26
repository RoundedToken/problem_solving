// https://leetcode.com/problems/find-the-city-with-the-smallest-number-of-neighbors-at-a-threshold-distance/description/

var findTheCity = function (n, edges, distanceThreshold) {
  const dist = Array.from({ length: n }, () => Array(n).fill(Infinity));

  for (let i = 0; i < n; i++) {
    dist[i][i] = 0;
  }

  for (const [u, v, w] of edges) {
    dist[u][v] = w;
    dist[v][u] = w;
  }

  for (let k = 0; k < n; k++) {
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (dist[i][j] > dist[i][k] + dist[k][j]) {
          dist[i][j] = dist[i][k] + dist[k][j];
        }
      }
    }
  }

  let resultCity = -1;
  let smallestCount = n;

  for (let i = 0; i < n; i++) {
    let count = 0;
    for (let j = 0; j < n; j++) {
      if (i !== j && dist[i][j] <= distanceThreshold) {
        count++;
      }
    }
    if (count < smallestCount || (count === smallestCount && i > resultCity)) {
      smallestCount = count;
      resultCity = i;
    }
  }

  return resultCity;
};
