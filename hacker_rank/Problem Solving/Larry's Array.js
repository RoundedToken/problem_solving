// https://www.hackerrank.com/challenges/larrys-array/problem?isFullScreen=true&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen
function larrysArray(A) {
    let l = A.length;
    let dis;
    let round;
    function rotate1 (x1, x2) {
        let slice = A.slice(x1, x2 + 1);
        let x = slice[0];
        slice[0] = slice[1];
        slice[1] = slice[2];
        slice[2] = x;
        return (A.slice(0, x1).concat(slice).concat(A.slice(x2 + 1, l)))
    }
    function rotate2 (x1, x2) {
        let slice = A.slice(x1, x2 + 1);
        let x = slice[0];
        slice[0] = slice[2];
        slice[2] = slice[1];
        slice[1] = x;
        return (A.slice(0, x1).concat(slice).concat(A.slice(x2 + 1, l)))
    }
    for (let i = 0; i < l; i++) {
        if (A[i] != i + 1) {
            for (let g = i + 1; g < l; g++) {
                if (A[g] == i + 1) {
                    dis = g - i;
                    round = Math.floor(dis / 2);
                    if (dis % 2 == 1) {
                        for (let k = 1; k <= round; k++) {
                            A = rotate2(g - 2, g);
                            g = g - 2;
                        }
                        A = rotate1(i, i + 2);
                    } else {
                        for (let k = 1; k <= round; k++) {
                            A = rotate2(g - 2, g);
                            g = g - 2;
                        }
                    }
                    console.log(A)
                    break
                }
            }
        }
    }
    for (let i = 0; i < l; i++) {
        if (A[i] != i + 1) return "NO"
    }
    return "YES"
}
function main() {
    let A = [1, 2, 4, 3];
    console.log(larrysArray(A));
}
if (require.main === module) {
    main();
}