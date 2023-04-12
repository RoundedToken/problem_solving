function bfs(n, m, edges, s) {

    let nodes = new Map();
    let answer = Array();
    let matrix1 = Array(n);
    let inx = new Map();

    for (let i = 0; i < n; i++) {
        matrix1[i] = Array(n).fill(0);
    }

    for (let i = 0; i < m; i++) {
        let first = edges[i][0] - 1;
        let second = edges[i][1] - 1;
        matrix1[first][second] = 1;
        matrix1[second][first] = 1;
    }

    // for (let i = 0; i < n; i++) {
    //     matrix1[i][i] = "";
    // }

    let matrix2 = Array();
    for (let i = 0; i < n; i++) {
        matrix2[i] = matrix1[i].slice();
    }

    console.table(matrix2)

    function mul(arr) {
        let x = Array();
        for (let i = 0; i < n; i++) {
            x[i] = arr[i].slice();
        }
        for (let i = 0; i < n; i++) {
            for (let g = 0; g < n; g++) {
                for (let j = 0; j < n; j++) {
                    arr[i][g] += x[i][j] * matrix2[j][g]
                }
            }
        }
    }


    let cof = 1;
    for (let k = 1; k <= 7; k++) {
        for (let i = 0; i < n; i++) {
            if (i != s - 1) if (matrix1[s - 1][i] != 0 && nodes.has(i + 1) == false) nodes.set(i + 1, cof)
        }
        cof++;
        mul(matrix1)
    }

    console.table(nodes)

    for (let i = 1; i <= n; i++) {

        if (i == s) continue;
        else {

            if (nodes.has(i)) answer.push(nodes.get(i) * 6);
            else answer.push(-1);

        }
    }

    return answer
}
function main() {
    let n = 13;
    let m = 27;
    let edges = [[2, 7], [9, 10],
    [3, 4], [3, 6],
    [1, 4], [1, 2], [1, 5],
    [6, 4], [6, 3],
    [5, 1], [5, 7],
    [7, 6], [7, 5],
    [4, 1], [4, 2], [2, 1], [4, 6], [7, 8], [8, 7], [2, 7], [2, 7], [2, 7], [2, 7], [2, 7], [2, 7],
    [12, 13], [13, 4]];
    let s = 1;
    console.log(bfs(n, m, edges, s));
}
if (require.main === module) {
    main();
}