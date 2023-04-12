// https://www.hackerrank.com/challenges/queens-attack-2/problem?isFullScreen=true
function queensAttack(n, k, r_q, c_q, obstacles) {
    // Corner case O(1)
    if (obstacles.length === 0) {
        return 2 * (n - 1) //horizontal and vertical 
            + 2 * Math.min( //diagonals
                r_q - 1, c_q - 1,
                n - r_q, n - c_q
            ) + n - 1;
    }

    const minDist = [ //distance from Queen to edges
        n - c_q,    // right  / east
        r_q - 1,    // bottom / south
        c_q - 1,    // left   / west
        n - r_q,    // top    / north
        Math.min(n - c_q, r_q - 1), //right bottom / south east
        Math.min(c_q - 1, r_q - 1), //left  bottom / south west
        Math.min(c_q - 1, n - r_q), //left  top    / north west
        Math.min(n - c_q, n - r_q), //right top    / north east
    ];

    obstacles.forEach(o => {
        if (o[0] === r_q && o[1] > c_q) //E
            minDist[0] = Math.min(minDist[0], o[1] - c_q - 1)
        if (o[1] === c_q && o[0] < r_q) //S
            minDist[1] = Math.min(minDist[1], r_q - o[0] - 1)
        if (o[0] === r_q && o[1] < c_q) //W
            minDist[2] = Math.min(minDist[2], c_q - o[1] - 1)
        if (o[1] === c_q && o[0] > r_q) //N 
            minDist[3] = Math.min(minDist[3], o[0] - r_q - 1)
        if (o[0] - r_q == c_q - o[1] && o[0] < r_q) //SE 
            minDist[4] = Math.min(minDist[4], r_q - o[0] - 1)
        if (o[0] - r_q == o[1] - c_q && o[0] < r_q) //SW
            minDist[5] = Math.min(minDist[5], r_q - o[0] - 1)
        if (o[0] - r_q == c_q - o[1] && o[0] > r_q) //NW
            minDist[6] = Math.min(minDist[6], o[0] - r_q - 1)
        if (o[0] - r_q == o[1] - c_q && o[0] > r_q) //NE
            minDist[7] = Math.min(minDist[7], o[0] - r_q - 1)
    });

    return minDist.reduce((a, b) => a + b);
}
function main() {
}
if (require.main === module) {
    main();
}