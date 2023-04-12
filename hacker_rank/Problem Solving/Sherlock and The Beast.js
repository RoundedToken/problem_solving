// https://www.hackerrank.com/challenges/sherlock-and-the-beast/problem?isFullScreen=true&h_r=next-challenge&h_v=zen
function decentNumber(n) {
    let answer = "";

    function three(x) {
        if (x == 0) return -1
        let word = "555";
        for (let i = 0; i < x; i++){
            answer = word + answer;
        }
        return answer
    }

    function five(x) {
        while (x % 3 != 0 && x >= 0) {
            let word = "33333"
            x -= 5;
            answer += word;
        }
        if (x < 0) return -1
        else return x
    }

    if (n % 3 == 0) return console.log(three(n / 3));
    else {
        n = five(n)
        if (n == -1) return console.log(-1);
        else if (n == 0) return console.log(answer)
        else return console.log(three(n / 3))
    }
}
function main() {
    let n = 100
    console.log(decentNumber(n));
}
if (require.main === module) {
    main();
}