// https://www.hackerrank.com/challenges/encryption/problem?isFullScreen=true
function encryption(s) {
    s = s.replaceAll(" ", "")
    let solution = "";
    let L = s.length;
    let rows = Math.floor(Math.sqrt(L));
    let columns = Math.ceil(Math.sqrt(L));
    if (rows * columns < L) {
        rows++;
    }
    let Arr = Array(rows);
    for (let i = 0; i < rows; i++) {
        Arr[i] = [];
    }
    console.log(Arr);
    let count = 0;
    let index = 0;
    for (let i = 0; i < L; i++) {
        if (count < columns) {
            count++;
            Arr[index].push(s.charAt(i));
        } else {
            index++;
            count = 1;
            Arr[index].push(s.charAt(i));
        }
    }
    console.log(Arr);
    for (let i = 0; i < columns; i++) {
        for (let g = 0; g < rows; g++) {
            if (Arr[g][i] == undefined) {
                break;
            }
            solution += Arr[g][i];
        }
        solution += " ";
    }
    return solution.trim()
}
function main() {
}
if (require.main === module) {
    main();
}