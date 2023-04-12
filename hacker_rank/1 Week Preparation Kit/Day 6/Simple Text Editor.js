// https://www.hackerrank.com/challenges/one-week-preparation-kit-simple-text-editor/problem?h_l=interview&isFullScreen=true&playlist_slugs%5B%5D%5B%5D=preparation-kits&playlist_slugs%5B%5D%5B%5D=one-week-preparation-kit&playlist_slugs%5B%5D%5B%5D=one-week-day-six
function processData(input) {
    let inputnew = input
    input = inputnew.split("\n")
    let S = [""];
    function COM(x) {
        if (x[0] == 1) {
            S.push(S[S.length - 1] + x[1])
            //s += x[1];
        }
        else if (x[0] == 2) {
            S.push(S[S.length - 1].slice(0, S[S.length - 1].length - x[1]))
            //s = s.slice(0, s.length - x[1]);
        }
        else if (x[0] == 3) {
            return console.log(S[S.length - 1].charAt(x[1] - 1))
            //return console.log(s.charAt(x[1] - 1))
        }
        else {
            S.pop();
        }
    }
    let l = input.length;
    for (let i = 1; i < l; i++) {
        let command = input[i].split(" ");
        //console.log("S = ", S)
        COM(command)
    }
} 
function main() {
}
if (require.main === module) {
    main();
}