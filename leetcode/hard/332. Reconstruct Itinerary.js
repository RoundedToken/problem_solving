// https://leetcode.com/problems/reconstruct-itinerary/description/?envType=daily-question&envId=2023-09-14

var findItinerary = function (tickets) {
    const graph = {};

    for (const [src, dst] of tickets) {
        if (!graph[src]) graph[src] = [];
        graph[src].push(dst);
    }

    for (const key in graph) {
        graph[key].sort().reverse();
    }

    const itinerary = [];

    function dfs(airport) {
        while (graph[airport] && graph[airport].length > 0) {
            dfs(graph[airport].pop());
        }
        itinerary.push(airport);
    }

    dfs('JFK');

    return itinerary.reverse();
};
