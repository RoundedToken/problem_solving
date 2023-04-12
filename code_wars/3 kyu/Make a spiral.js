// https://www.codewars.com/kata/534e01fbbb17187c7e0000c6/train/javascript
function spiralize(n) {

    let spir = Array(n).fill(null).map(() => Array(n).fill(0))
    for (let i in spir[0]) {
        spir[0][i] = 1;
        spir[i][n - 1] = 1;
        spir[n - 1][i] = 1;
    }
    let x = 0;
    let y = n - 1;
    for (; ;) {
        //up
        if (spir[y - 2][x] == 1 || spir[y - 1][x + 1] == 1) return spir;
        else {
            for(; ;) {
                y--;
                spir[y][x] = 1;
                if (spir[y - 2][x] == 1) break
            }
        }
        //right
        if (spir[y][x + 2] == 1 || spir[y + 1][x + 1] == 1) return spir;
        else {
            for(; ;) {
                x++;
                spir[y][x] = 1;
                if (spir[y][x + 2] == 1) break
            }
        }
        //down 
        if (spir[y + 2][x] == 1 || spir[y + 1][x - 1] == 1) return spir;
        else {
            for(; ;) {
                y++;
                spir[y][x] = 1;
                if (spir[y + 2][x] == 1) break
            }
        }
        //left 
        if (spir[y][x - 2] == 1 || spir[y - 1][x - 1] == 1) return spir;
        else {
            for(; ;) {
                x--;
                spir[y][x] = 1;
                if (spir[y][x - 2] == 1) break
            }
        }
    }


    console.table(spir)
}
function main() {
    let n = 14
    console.log(spiralize(n));
}
if (require.main === module) {
    main();
}