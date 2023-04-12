// https://www.codewars.com/kata/521c2db8ddc89b9b7a0000c1/train/javascript
let snail = function(array) {
    let answer = [];
    let l = array.length;
    if (l == 0) return [];
    else if (l == 1) return array[0];
    else if (l == 2) {
        answer.push(...array[0]);
        answer.push(...array[1].reverse());
        return answer
    }
    
    for (let i in array[0]) {
        answer.push(array[0][i]);
        array[0][i] = "X";
    }
    for (let i = 1; i < l; i++) {
        answer.push(array[i][l - 1]);
        array[i][l - 1] = "X";
    }
    for (let i = l - 2; i >= 0; i--) {
        answer.push(array[l - 1][i]);
        array[l - 1][i] = "X";
    }
    let x = 0;
    let y = l - 1;
    for (;;) {
        //up
        if (array[y - 1][x] == "X") return answer
        else {
            for (;;) {
                y--;
                answer.push(array[y][x]);
                array[y][x] = "X";
                if (array[y - 1][x] == "X") break
            }
        }
        //right
        if (array[y][x + 1] == "X") return answer
        else {
            for (;;) {
                x++;
                answer.push(array[y][x]);
                array[y][x] = "X";
                if (array[y][x + 1] == "X") break
            }
        }
        //down
        if (array[y + 1][x] == "X") return answer
        else {
            for (;;) {
                y++;
                answer.push(array[y][x]);
                array[y][x] = "X";
                if (array[y + 1][x] == "X") break
            }
        }
        //left
        if (array[y][x - 1] == "X") return answer
        else {
            for (;;) {
                x--;
                answer.push(array[y][x]);
                array[y][x] = "X";
                if (array[y][x - 1] == "X") break
            }
        }
    }
    console.table(array)
    console.log(answer)
    

  }
function main() {
    let array = [[2, 2], [2, 3]];
    console.log(snail(array));
}
if (require.main === module) {
    main();
}