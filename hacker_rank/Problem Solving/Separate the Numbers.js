// https://www.hackerrank.com/challenges/separate-the-numbers/problem?isFullScreen=true&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen
function separateNumbers(s) {
    let L = s.length
    let l = Math.floor(L / 2);
    function y(x) {
        let str = ""
        while (str.length < L) {
            str += x;
            x = (BigInt(x) + 1n).toString()
        }
        console.log(str)
        return str
    }
    console.log(l)
    console.log(s.length)
    for (let i = 1; i <= l; i++) {
        let firstW = s.slice(0, i);
        if (y(firstW) == s) return console.log("yes", firstW)
    }
    return "no"
}
function main() {
    let s = "90071992547409929007199254740993";  //99100101 //7879
    console.log(separateNumbers(s));
}
if (require.main === module) {
    main();
}