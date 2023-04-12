// https://www.codewars.com/kata/52bb6539a4cf1b12d90005b7/train/javascript
// function validateBattlefield(field) {

//     let ships = [0, 0, 0, 0];
//     let STOP = false;

//     function search(field) {
//         let xy;
//         for (let i = 0; i < field.length; i++) {
//             for (let g = 0; g < field[i].length; g++) {
//                 if (field[i][g] == 1) {
//                     xy = [i, g];
//                     return xy
//                 };
//             }
//         }
//         return xy;
//     }


//     while(STOP) {
//         let pos = search(field);
//         let srop = false;
//         if (pos == undefined) break
//         let count = 1;
//         let dir = direction(field,pos);
//         if (dir == "stop") {
//             ships[0]++;
//             continue
//         }
//         while(stop) {
//             build(field, pos)
//         }
//     }
//     build(field, pos);
//     console.table(field)
//     console.log(pos)
// }
function validateBattlefield(field) {
    let ships = [0, 0, 0, 0];
    for (let i = 0; i < 10; i++) {
        let IN = false;
        let size = 1;
        for (let g = 0; g < 10; g++) {
            if (field[i][g] == 1 && IN) {
                size++;
                field[i][g - 1] = "X";
                if (g > 1) field[i][g - 2] = "X";
                if (i < 9) {
                    if (g > 1) field[i + 1][g - 2] = "X";
                    field[i + 1][g - 1] = "X"
                    field[i + 1][g] = "X"
                }
                if (i > 0) {
                    if (g > 1) field[i - 1][g - 2] = "X";
                    field[i - 1][g - 1] = "X";
                    field[i - 1][g] = "X";
                }

            }
            else if (field[i][g] == 1 && IN == false) IN = true;
            else if (field[i][g] != 1 && IN && size > 1) {
                IN = false;
                ships[size - 1]++;
                size = 1;
                field[i][g - 1] = "X";
                field[i][g] = "X";
                if (i < 9) field[i + 1][g] = "X"
                if (i > 0) field[i - 1][g] = "X"
            } else if (field[i][g] != 1 && IN && size == 1) {
                IN = false;
            }
        }
    }
    for (let i = 0; i < 10; i++) {
        let IN = false;
        let size = 1;
        for (let g = 0; g < 10; g++) {
            if (field[g][i] == 1 && IN) {
                size++;
                field[g - 1][i] = "X";
                if (g > 1) field[g - 2][i] = "X"
                if (i < 9) {
                    if (g > 1) field[g - 2][i + 1] = "X";
                    field[g - 1][i + 1] = "X";
                    field[g][i + 1] = "X"
                }
                if (i > 0) {
                    if (g > 1) field[g - 2][i - 1] = "X";
                    field[g - 1][i - 1] = "X";
                    field[g][i - 1] = "X";
                }
            }
            else if (field[g][i] == 1 && IN == false) IN = true;
            else if (field[g][i] != 1 && IN && size > 1) {
                IN = false;
                ships[size - 1]++;
                size = 1;
                field[g][i] = "X";
                field[g - 1][i] = "X";
                if (i < 9) field[g][i + 1] = "X";
                if (i > 0) field[g][i - 1] = "X";
                
            } else if (field[g][i] != 1 && IN && size == 1) {
                IN = false;
            }
        }
    }
    for (let i of field) {
        for (let g of i) {
            if (g == 1) ships[0]++;
        }
    }
    if (ships.join("") == "4321") return true
    else return false
    console.table(field)
    console.log(ships)
}
function main() {
    let field = [
        [1, 0, 0, 0, 0, 1, 1, 0, 0, 0],
        [1, 0, 1, 0, 0, 0, 0, 0, 1, 0],
        [1, 0, 1, 0, 1, 1, 1, 0, 1, 0],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
        [0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
        [0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ];
    console.log(validateBattlefield(field));
}
if (require.main === module) {
    main();
}