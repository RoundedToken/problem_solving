// https://www.hackerrank.com/challenges/almost-sorted/problem?isFullScreen=true&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen
function almostSorted(arr) {
    let l = arr.length;
    let indChek;
    let indSwap1;
    let indSwap2;
    let indexEnd;
    let startArr = Array.from(arr);
    function chek(Array) {
        for (let i = 0; i < Array.length; i++) {
            if (Array[i] > Array[i + 1]) {
                indChek = i;
                return false
            }
        }
        return true
    }
    function swap(index1, index2) {
        let x = arr[index1]
        arr[index1] = arr[index2];
        arr[index2] = x;
    }
    function reverse(Array, index1, index2) {
        return Array.slice(index1, index2 + 1).reverse()
    }
    if (chek(arr)) return "yes"
    else {

        indSwap1 = indChek;
        for (let i = indSwap1 + 1; i < l; i++) {
            indSwap2 = i
            if (arr[i + 1] == undefined || arr[i + 1] > arr[indSwap1] ) {
                break;
            }
        }
        swap(indSwap1, indSwap2);

        if (chek(arr)) {
            console.log("yes");
            return console.log("swap", indSwap1 + 1, indSwap2 + 1);
        } else arr = Array.from(startArr);

        let indexStart = indSwap1;
        for (let i = indexStart; i < l; i++) {
            if (arr[i] < arr[i + 1]) {
                indexEnd = i;
                break;
            }
        }
        let arrReverse = reverse(arr, indexStart, indexEnd);
        let arrLeft = arr.slice(0, indexStart);
        let arrRight = arr.slice(indexEnd + 1, l);
        arr = arrLeft.concat(arrReverse.concat(arrRight));
        if (chek(arr)) {
            console.log("yes");
            return console.log("reverse", indexStart + 1, indexEnd + 1);
        } else return console.log("no")
    }
}
function main() {
    //let arr = [ 6, 3, 4, 5, 2, 7];
    let arr = [3, 1, 2];
    //let arr = [1, 3, 2, 4]
    console.log(almostSorted(arr));
}
if (require.main === module) {
    main();
}