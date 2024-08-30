// https://leetcode.com/problems/modify-graph-edge-weights/description/

var modifiedGraphEdges = function (n, edges, source, destination, target) {
  let map = getMap(edges);
  let dijMap = getDijMap(edges, map, source, destination, n);

  // check if the default edges fulfill the target
  if (dijMap[destination] < target) return [];
  if (dijMap[destination] === target) {
    return edges.map((e) => {
      if (e[2] === -1) e[2] = 2 * Math.pow(10, 9);
      return e;
    });
  }

  // start to assume -1 is 1
  for (let i = 0; i < edges.length; i++) {
    if (edges[i][2] === -1) {
      edges[i][2] = 1;
      map[edges[i][0]] ||= [];
      map[edges[i][1]] ||= [];
      map[edges[i][0]].push([edges[i][1], 1]);
      map[edges[i][1]].push([edges[i][0], 1]);

      dijMap = getDijMap(edges, map, source, destination);

      // found the path, add the difference, fill the rest -1 and return
      if (dijMap[destination] <= target) {
        edges[i][2] += target - dijMap[destination];

        for (let j = i + 1; j < edges.length; j++) {
          if (edges[j][2] === -1) edges[j][2] = 2 * Math.pow(10, 9);
        }

        return edges;
      }
    }
  }

  return [];
};

// since LeetCode still not support MinPriorityQueue with array/object,
// we can either make our own heap or simply use brute force, considering that the maximum value of 'n' is only 10^2.
const spliceMin = (arr, map) => {
  let min = Infinity;
  let idx = -1;

  for (let i = 0; i < arr.length; i++) {
    if (map[arr[i]] < min) {
      idx = i;
      min = map[arr[i]];
    }
  }

  let res = null;

  if (idx > -1) {
    res = arr.splice(idx, 1);
  }

  return res;
};

const getDijMap = (edges, map, source, dest, n) => {
  let dijMap = {};

  for (let k in map) {
    dijMap[k] = Infinity;
  }

  dijMap[source] = 0;

  let visited = new Array(n).fill(false);
  let unvisited = Object.keys(map);

  while (unvisited.length) {
    let cur = spliceMin(unvisited, dijMap);
    let neighbors = map[cur];

    visited[cur] = true;

    if (!neighbors) return dijMap;

    for (let [n, w] of neighbors) {
      if (visited[n]) continue;

      dijMap[n] = Math.min(dijMap[n], dijMap[cur] + w);
    }
  }
  return dijMap;
};

const getMap = (edges) => {
  let map = {};

  for (let [n1, n2, w] of edges) {
    if (w !== -1) {
      map[n1] ||= [];
      map[n2] ||= [];
      map[n1].push([n2, w]);
      map[n2].push([n1, w]);
    }
  }

  return map;
};
