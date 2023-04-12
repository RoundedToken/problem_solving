// https://www.hackerrank.com/challenges/one-week-preparation-kit-grid-challenge/problem?h_l=interview&isFullScreen=true&playlist_slugs%5B%5D%5B%5D=preparation-kits&playlist_slugs%5B%5D%5B%5D=one-week-preparation-kit&playlist_slugs%5B%5D%5B%5D=one-week-day-four
function gridChallenge(grid) {
    let n = grid.length;
    for (let i = 0; i < n; ++i) {
        let temp = grid[i].split("").sort();
        grid[i] = temp;
    }
    let answer = "YES";
    for (let i = 0; i < n; ++i) {
        let temp = [];
        for (let j = 0; j < n; ++j) {
            temp.push(grid[j][i]);
        }
        let temp1 = temp.join("");
        let temp2 = temp.sort().join("");
        if (temp1 !== temp2) {
            answer = "NO";
            break;
        }
    }
    return answer;
}
function main() {
}
if (require.main === module) {
    main();
}